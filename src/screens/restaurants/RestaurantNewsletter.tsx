import {View, ScrollView, } from "react-native"
import { ReviewCard } from "../../components"

const RestaurantNewsletter = () => {
  return(
    <View style={{gap: 20}}>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </View>
  )
}
export {RestaurantNewsletter}