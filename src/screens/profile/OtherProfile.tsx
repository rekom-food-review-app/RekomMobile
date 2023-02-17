import {ScrollView} from 'react-native-virtualized-view'
import {Colors} from '../../assets/colors'
import {ReviewCard} from '../../components'
import {CsOtherProfile} from "./CsOtherProfile";

const OtherProfile = () => {
   return (
      <ScrollView style={{backgroundColor: Colors.B}}>
         <CsOtherProfile/>
         <ReviewCard
            rating=''
            rekomerAvatarUrl='https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            rekomerId=''
            rekomerName='linh loz'
            restaurantCoordinates=''
            restaurantId=''
            restaurantName='hahaha'
            reviewAt='2 ngay truoc'
            reviewContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
            reviewId=''
            textTouchingDisable={true}
            wrapperStyle={{marginTop: 10}}
            isEmojiDisplay={false}/>
      </ScrollView>
   )
}

export {OtherProfile}