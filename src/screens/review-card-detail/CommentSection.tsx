import { useEffect, useState } from 'react'
import {FlatList, View} from 'react-native'
import RekomAxios from '../../api/axios'
import { Colors } from '../../assets/colors'
import { UserActionInfo } from '../../components'
import * as signalR from '@microsoft/signalr';
import { WS_COMMENT_HUB } from '../../constant/api'
import { emitter } from '../../app/emitter'
import { useNavigation } from '@react-navigation/native'

interface CommentSectionProps 
{
  // commentList: any[]
  // handleEndReached: () => void
  reviewId: string
}

const CommentSection = (props: CommentSectionProps) =>
{
  const [commentList, setCommentList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const size = 8

  const nav = useNavigation<any>()

  useEffect(() => {
    let currentLastComment = commentList[commentList.length - 1]
    console.log("yeah") 
    RekomAxios({
       method: 'get',
       url: `reviews/${props.reviewId}/comments?page=${page}&size=${size}&lastTimestamp=${currentLastComment ? currentLastComment.createdAt : ''}`,
       responseType: 'json'
    })
    .then(res => {
       let commentList = res.data.commentList
       setCommentList((pre) => [...pre, ...commentList])
    })
  },[page])

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl(WS_COMMENT_HUB)
        .build();

    connection.on("ReceiveComment", (comment: any) => {
        setCommentList((pre) => {
          // pre.push(comment)
          // return pre
          return [comment, ...pre]
        })
        emitter.emit(`NewComment-${props.reviewId}`)
    });

    connection.start()
        .then(() => console.log("ok"))
        .catch((error) => console.log('-------------', error))

    return () => {
        console.log("out")
        connection.stop();
    };
  }, []);

  const handleEndReached = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return(
      <FlatList 
        data={commentList}
        renderItem = {({item}) => 
          <UserActionInfo 
            onPressUser={() => nav.push('OtherProfileScreen', {rekomerId: item.rekomerId})}
            id={item.id}
            avtSize={'xs'} 
            avatarUrl={item.rekomerAvatarUrl} 
            fullName={item.rekomerName}
            wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
            content={item.content}
            createdAt={item.createdAt}
          />}
        keyExtractor={(item) => item.id}
        onEndReached={handleEndReached}
        onEndReachedThreshold={4}
      />
    // </View>
  )
}
export {CommentSection}