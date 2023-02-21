import {View} from 'react-native'
import {ScrollView} from 'react-native-virtualized-view'
import {useSelector} from 'react-redux'
import {RootState} from '../../app/store'
import {Button, HeaderBack, ReviewCard, TextField} from '../../components'
import {CommentSection} from './CommentSection'
import {EmoijBar} from './EmoijBar'
import {Like} from './Like'

const ReviewCardDetailLayout = () => {
   const tabEmoij = useSelector((state: RootState) => state.restaurantTab.tabRes)
   return (
      <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
         <ScrollView>
            <HeaderBack type={'secondary'} title={'Review Details'}
                        wrapperStyle={{marginTop: 30, marginBottom: 20, paddingHorizontal: 20}}/>
            <ReviewCard
               rating=''
               rekomerAvatarUrl='https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
               rekomerId=''
               rekomerName='linh l'
               restaurantCoordinates=''
               restaurantId=''
               restaurantName='hahaha'
               reviewAt='2 ngay truoc'
               reviewContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
               reviewId=''
               textTouchingDisable={true}
               wrapperStyle={{marginTop: 10}}
               isEmojiDisplay={false}/>
            <View style={{paddingHorizontal: 20}}>
               <EmoijBar tab={tabEmoij}/>
               {
                  tabEmoij == 1 ? <CommentSection/> : null
               }
               {
                  tabEmoij == 2 ? <Like/> : null
               }
               {
                  tabEmoij == 3 ? <Like/> : null
               }
               {
                  tabEmoij == 4 ? <Like/> : null
               }
            </View>
         </ScrollView>
         {
            tabEmoij == 1 ? (
               <View style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  left: 0,
                  paddingVertical: 10
               }}>
                  <TextField placeholder={'Reply to this review'} size={'md'}/>
                  <Button label={'Send'} type={'secondary'} size={'xs'}
                          wrapperStyle={{alignSelf: 'center', height: "100%"}}/>
               </View>) : null
         }
      </View>
   )
}
export {ReviewCardDetailLayout}