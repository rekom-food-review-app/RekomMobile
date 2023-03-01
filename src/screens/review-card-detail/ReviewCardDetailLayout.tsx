import {View, Text, TextInput} from 'react-native'
import {ScrollView} from 'react-native-virtualized-view'
import {useSelector} from 'react-redux'
import {RootState} from '../../app/store'
import {Button, HeaderBack, ReviewCard, TextField} from '../../components'
import {CommentSection} from './CommentSection'
import {EmoijBar} from './EmoijBar'
import {Like} from './Like'
import { useRoute } from '@react-navigation/native'
import { ReviewCardType } from '../../@types/ReviewCardType'
import { useEffect, useState } from 'react'
import RekomAxios from '../../api/axios'
import { InputStateType } from '../../@types/InputStateType'
import { inputInitState } from '../../constant/inputInitState'
import React, { useRef } from 'react'
import * as signalR from '@microsoft/signalr';
import { WS_COMMENT_HUB } from '../../constant/api'


const ReviewCardDetailLayout: React.FC = () => {
   const route = useRoute();
   const tabEmoij = useSelector((state: RootState) => state.restaurantTab.tabRes)
   const [review, setReview] = useState<ReviewCardType>(route.params as ReviewCardType)
   const [addComment, setAddComment] = useState<InputStateType>(inputInitState)
   const [commentList, setcommentList] = useState([]);
   const [page, setPage] = useState(1);
   const size = 5
   
   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: `reviews/123/comments?page=${page}&size=${size}`,
         responseType: 'json'
      })
      .then(res => {
         let commentList = res.data.commentList
         setcommentList((pre) => {
            return pre.concat(commentList)
         })
      })
      .catch(e => {
         console.log(e)
      })
   },[page])
   const handleEndReached = () => {
      setPage((prevPage) => prevPage + 1);
    };
    
//    useEffect(() => {
//       const connection = new signalR.HubConnectionBuilder()
//           .withUrl(WS_COMMENT_HUB)
//           .build();

//       connection.on("ReceiveComment", comment => {
//          console.log('hihi')
//       });

//       connection.start()
//          .then(() => console.log("ok"))
//          .catch((error) => console.log(error))

//       return () => {
//          //  connection.stop();
//       };
//   }, []);

   const post = () => {
      let data = {
         "content": addComment.value
      }
      RekomAxios({
         method: 'post',
         url: 'reviews/123/comments',
         data
      })
      .then((res) => {
         console.log(res)
      })
      .catch((e) => {
         console.log(e)
      })
   }
   return (
      <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
         <ScrollView>
            <HeaderBack type={'secondary'} title={'Review Details'}
                        wrapperStyle={{marginTop: 30, marginBottom: 20, paddingHorizontal: 20}}/>
            <ReviewCard
               {...review}
               textTouchingDisable={true}
               isEmojiDisplay={false}/>
            <View style={{paddingHorizontal: 20}}>
               <EmoijBar tab={tabEmoij}/>
               {
                  tabEmoij == 1 ? <CommentSection commentList={commentList} handleEndReached={handleEndReached}/> : null
               }
               {
                  tabEmoij == 2 ? <Like /> : null
               }
               {
                  tabEmoij == 3 ? <Like /> : null
               }
               {
                  tabEmoij == 4 ? <Like /> : null
               }
            </View>
         </ScrollView>
         {
            tabEmoij == 1 ? (
               <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, right: 0, left: 0,paddingVertical: 10}}>
                  <TextField 
                     onChangeText={(text: string) => {setAddComment({error: "", value: text})}}
                     placeholder={'Reply to this review'} 
                     size={'md'} />
                  <Button label={'Send'} type={'secondary'} size={'xs'} onPress={post} wrapperStyle={{alignSelf: 'center', height: "100%"}}/>
               </View>) : null
         }
      </View>
   )
}

export {ReviewCardDetailLayout}