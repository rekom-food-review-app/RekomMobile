import {ScrollView} from "react-native-virtualized-view"
import {Colors} from '../../assets/colors'
import {MyProfileHeader} from "./index";
import { MyReviewList } from "./MyReviewList";

const MyProfile = () => {
   return (
      <ScrollView style={{backgroundColor: Colors.B}}>
         <MyProfileHeader/>
         <MyReviewList/>
      </ScrollView>
   )
}

export {MyProfile}