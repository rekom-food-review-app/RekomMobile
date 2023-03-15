import { useEffect, useState } from 'react';
import {ScrollView} from 'react-native-virtualized-view'
import RekomAxios from '../../api/axios';
import {Colors} from '../../assets/colors'
import {HeaderBack, ReviewCard} from '../../components'
import {CsOtherProfile} from "./CsOtherProfile";
import { RekomerProfileApiType } from '../../@types/RekomerProfileApiType';
import { rekomerProfileApiInitState } from '../../constant/rekomerProfileApiInitState';
import { FlatList } from 'react-native';
import { ReviewCardType } from '../../@types/ReviewCardType';
import { useRoute } from '@react-navigation/native';

const OtherProfile = () => {
   const [data, setData] = useState<RekomerProfileApiType>(rekomerProfileApiInitState)
   const [reviews, setReviews] = useState<ReviewCardType[]>([])
   const route = useRoute()
   const [otherUser, setOtherUser] = useState(route.params)
   const [page, setPage] = useState(1);
   const size = 4
   
   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: `/rekomers/${otherUser}/profile`,
         responseType: 'json'
      })
      .then(res => {
         let data = res.data.rekomer
         setData(data)
      })
      .catch(e => {
         console.log(e)
      })
   },[])

   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: `rekomers/${otherUser}/reviews?page=${page}&size=${size}`
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
         <CsOtherProfile
            username={data.username} 
            avatarUrl={data.avatarUrl}
            fullName={data.fullName}
            description={data.description}
            amountReview={data.amountReview}
            amountFollower={data.amountFollower}
            amountFollowing={data.amountFollowing}
            isFollow={data.isFollow}
            id={data.id}
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

export {OtherProfile}