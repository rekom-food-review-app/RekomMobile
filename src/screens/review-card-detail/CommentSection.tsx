import { useEffect, useState } from 'react'
import {FlatList, View} from 'react-native'
import RekomAxios from '../../api/axios'
import { Colors } from '../../assets/colors'
import { UserActionInfo } from '../../components'
import * as signalR from '@microsoft/signalr';
import { WS_COMMENT_HUB } from '../../constant/api'

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

  useEffect(() => {
    const commentListLength = commentList.length
    console.log("yeah")
    RekomAxios({
       method: 'get',
       url: `reviews/${props.reviewId}/comments?page=${page}&size=${size}&lastTimestamp=${commentListLength > 0 ? commentList[commentListLength-1].createdAt : ''}`,
       responseType: 'json'
    })
    .then(res => {
       let commentList = res.data.commentList
       setCommentList((pre) => {
          return pre.concat(commentList)
       })
    })
  },[page])

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl(WS_COMMENT_HUB)
        .build();

    connection.on("ReceiveComment", (comment: any) => {
        console.log(comment)
        setCommentList((pre) => {
          // pre.push(comment)
          // return pre
          return [comment, ...pre]
        })
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