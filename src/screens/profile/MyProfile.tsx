import {ScrollView} from "react-native-virtualized-view"
import { FlatList } from "react-native";
import { ReviewCardType } from "../../@types/ReviewCardType";
import {Colors} from '../../assets/colors'
import {ReviewCard} from "../../components"
import {CsMyProfile} from "./index";
import { useEffect, useState } from "react";
import RekomAxios from "../../api/axios";
import { RekomerProfileApiType } from '../../@types/OtherProfileApiType'
import { rekomerProfileApiInitState } from '../../constant/otherProfileApiInitState'

const MyProfile = () => {
   const [reviews, setReviews] = useState<ReviewCardType[]>([])
   const [rekomer, setRekomer] = useState<RekomerProfileApiType>(rekomerProfileApiInitState)
   const [page, setPage] = useState(1);
   const size = 4

   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: '/rekomers/me/profile',
      })
      .then(res => {
         setRekomer(res.data.rekomer)
         console.log(res.data.rekomer)
      })
      .catch(e => {
         console.log(e)
         console.log("ui")
      })
   },[])
   
   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: `rekomers/me/reviews?page=${page}&size=${size}`
      })
      .then(res => {
         setReviews(res.data.reviews)
      })
      .catch(e => {
         console.log(e)
      })
   }, [])

   return (
      <ScrollView style={{backgroundColor: Colors.B}}>
         <CsMyProfile 
            username={rekomer.username} 
            avatarUrl={rekomer.avatarUrl}
            fullName={rekomer.fullName}
            description={rekomer.description}
            amountReview={rekomer.amountReview}
            amountFollower={rekomer.amountFollower}
            amountFollowing={rekomer.amountFollowing}
            />
         <FlatList 
            data={reviews}
            renderItem = {({item}) => <ReviewCard key={item.id} {...item}
            />}
            keyExtractor={(item, index) => index.toString()}
         />
      </ScrollView>
   )
}
export {MyProfile}