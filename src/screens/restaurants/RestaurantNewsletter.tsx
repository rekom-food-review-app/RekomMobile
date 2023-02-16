import {View, ScrollView, } from "react-native"
import { ReviewCard } from "../../components"

const RestaurantNewsletter = () => {
  return(
    <View style={{gap: 20}}>
      <ReviewCard numberOfLines={2}/>
      <ReviewCard />
      <ReviewCard />
    </View>
  )
}
export {RestaurantNewsletter}