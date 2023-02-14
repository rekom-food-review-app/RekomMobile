import {View, Text} from "react-native"
import { ScrollView } from "react-native-virtualized-view"
import { Colors } from '../../assets/colors'
import { CsMyProfile, ReviewCard } from "../../components"

const MyProfile = () => {
  return(
    <ScrollView style={{backgroundColor: Colors.B}}>
      <CsMyProfile />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </ScrollView>
  )
}
export {MyProfile}