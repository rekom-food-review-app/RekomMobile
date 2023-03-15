import {ScrollView} from "react-native-virtualized-view"
import { FlatList } from "react-native";
import { ReviewCardType } from "../../@types/ReviewCardType";
import {Colors} from '../../assets/colors'
import {ReviewCard} from "../../components"
import {CsMyProfile} from "./index";
import { useEffect, useState } from "react";
import RekomAxios from "../../api/axios";
import { setMyProfile } from "../../global-states";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

const MyProfile = () => {
   const dispatch = useDispatch()
   const myProfile = useSelector((state: RootState) => state.myProfile.myProfile)
   const [reviews, setReviews] = useState<ReviewCardType[]>([])
   const [page, setPage] = useState(1);
   const size = 4

   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: '/rekomers/me/profile',
      })
      .then(res => {
         dispatch(setMyProfile({myProfile: res.data.rekomer}))
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
            username={myProfile.username} 
            avatarUrl={myProfile.avatarUrl}
            fullName={myProfile.fullName}
            description={myProfile.description}
            amountReview={myProfile.amountReview}
            amountFollower={myProfile.amountFollower}
            amountFollowing={myProfile.amountFollowing}
            />
         <FlatList 
            data={reviews}
            style={{marginBottom: 50}}
            renderItem = {({item}) => <ReviewCard key={item.id} {...item}
            />}
            keyExtractor={(item, index) => index.toString()}
         />
      </ScrollView>
   )
}
export {MyProfile}