import {useEffect, useState} from "react"
import {ReviewCard} from "../../components"
import RekomAxios from '../../api/axios';
import {ReviewCardType} from "../../@types/ReviewCardType";
import { VirtualizedList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addReviewList, setReviewList } from "../../global-states";
import { RootState } from "../../app/store";

interface RestaurantNewsletterProps {
   restaurantId: string
}

const RestaurantNewsletter = (props: RestaurantNewsletterProps) => {
   const dispatch = useDispatch()

   const reviewListGolbal = useSelector((state: RootState) => state.selectedRestaurantReviewList.reviewList)
   const [reviewPage, setReviewPage] = useState(1);
   const reviewSize = 10

   useEffect(() => {
      getReviews()
   }, [reviewPage])

   useEffect(() => {
      return () => {
         dispatch(setReviewList([]))
      }
   }, [])
   
   const getReviews = () => {      
      let currentLastReview = reviewListGolbal[reviewListGolbal.length - 1]

      RekomAxios({
         method: 'get',
         url: `restaurants/${props.restaurantId}/reviews?page=${reviewPage}&size=${reviewSize}&lastTimestamp=${currentLastReview ? currentLastReview.createdAt : ''}`,
         responseType: 'json'
      })
      .then(res => {
         dispatch(addReviewList(res.data.reviews))
      })
      .catch(e => {
         console.log(e)
      })
   }

   const handleEndReachedReviews = () => {
      setReviewPage((prevPage) => prevPage + 1);
   };

   const getReviewList = (review: ReviewCardType[], index: number) => reviewListGolbal[index];

   return (
      <VirtualizedList 
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={{gap: 1, justifyContent: "space-between", paddingLeft: 20}}
         data={reviewListGolbal}
         style={{marginBottom: 20, gap: 20}}
         renderItem = {({item}) => <ReviewCard key={item.id} {...item}/>}
         getItem={getReviewList}
         getItemCount={() => reviewListGolbal.length}
         keyExtractor={(item) => item.id}
         onEndReachedThreshold={5}
         onEndReached={handleEndReachedReviews}
         windowSize={8}
      />
   )
}
export {RestaurantNewsletter}