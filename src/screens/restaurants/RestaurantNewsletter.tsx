import {useEffect, useState} from "react"
import {View,} from "react-native"
import {ReviewCard} from "../../components"
import RekomAxios from '../../api/axios';
import {ReviewCardType} from "../../@types/ReviewCardType";

interface RestaurantNewsletterProps {
   restaurantId: string
}

const RestaurantNewsletter = () => {

   const [data, setData] = useState<ReviewCardType[]>([])

   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: 'rekomer-side/reviews?restaurantId=2',
         responseType: 'json'
      })
         .then(res => {
            let data = res.data.reviewList
            setData(data)
         })
         .catch(e => {
         })
   }, [])

   return (
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