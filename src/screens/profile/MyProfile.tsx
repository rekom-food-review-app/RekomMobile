import {View, Text} from "react-native"
import { ScrollView } from "react-native-virtualized-view"
import { Profile, ReviewCard } from "../../components"

const MyProfile = () => {
  return(
    <ScrollView>
      <Profile />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </ScrollView>
  )
}
export {MyProfile}