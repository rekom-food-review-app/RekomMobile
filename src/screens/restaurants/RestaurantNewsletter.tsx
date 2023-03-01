import {useEffect, useState} from "react"
import {FlatList, View,} from "react-native"
import {ReviewCard} from "../../components"
import RekomAxios from '../../api/axios';
import {ReviewCardType} from "../../@types/ReviewCardType";

interface RestaurantNewsletterProps {
   restaurantId: string
}

const RestaurantNewsletter = () => {

   const [review, setReview] = useState<ReviewCardType[]>([])
   const [page, setPage] = useState(1);
   const size = 4

   useEffect(() => {
      getReviews()
   }, [page])

   const getReviews = () => {
      RekomAxios({
         method: 'get',
         url: `restaurants/2/reviews?page=${page}&size=${size}`,
         responseType: 'json'
         })
         .then(res => {
            let review = res.data.reviews
            setReview((pre) => {
               return pre.concat(review)
            })
         })
         .catch(e => {
            console.log(e)
         })
   }

   const handleEndReached = () => {
      setPage((prevPage) => prevPage + 1);
    };

   return (
      <FlatList 
         data={review}
         renderItem = {({item}) => <ReviewCard key={item.id} {...item}/>}
         keyExtractor={(item, index) => index.toString()}
         onEndReached={handleEndReached}
         onEndReachedThreshold={2}
      />
   )
}
export {RestaurantNewsletter}