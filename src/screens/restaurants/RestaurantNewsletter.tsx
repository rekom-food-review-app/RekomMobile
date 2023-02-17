import { useEffect, useState } from "react"
import {View, ScrollView, } from "react-native"
import { ReviewCard } from "../../components"
import RekomAxios from '../../api/axios';
import { ReviewCardType } from "../../@types/ReviewCardType";

interface RestaurantNewsletterProps
{
  restaurantId: string
}

const RestaurantNewsletter = (props: RestaurantNewsletterProps) => {

  const [data, setData] = useState<ReviewCardType[]>([])

  useEffect(() => {
    RekomAxios({
      method: 'get',
      url: '/feed/restaurants/7037ac28-31e7-42a9-a238-fd13530ae6f5/reviews',
      responseType: 'json'
    })
    .then(res => {
      let data = res.data.reviews
      setData(data)
    })
    .catch(e => {
    })
  }, [])

  return(
    <View style={{gap: 20}}>
      {
        data.map((item: ReviewCardType) => {
          return <ReviewCard key={item.reviewId} {...item}/>
        })
      }
    </View>
  )
}
export {RestaurantNewsletter}