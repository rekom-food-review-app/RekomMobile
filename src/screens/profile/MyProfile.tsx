import {ScrollView} from "react-native-virtualized-view"
import {Colors} from '../../assets/colors'
import {ReviewCard} from "../../components"
import {CsMyProfile} from "./index";
const MyProfile = () => {
   return (
      
      <ScrollView style={{backgroundColor: Colors.B}}>
         <CsMyProfile/>
         {/* <ReviewCard
            rating=''
            rekomerAvatarUrl='https://i.pinimg.com/564x/f9/be/b9/f9beb905b5ade9a82dc759049be2085e.jpg'
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
            isEmojiDisplay={false}/> */}
      </ScrollView>
   )
}
export {MyProfile}