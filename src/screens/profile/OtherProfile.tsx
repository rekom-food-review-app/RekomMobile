import { useEffect, useState } from 'react';
import {ScrollView} from 'react-native-virtualized-view'
import RekomAxios from '../../api/axios';
import {Colors} from '../../assets/colors'
import {HeaderBack, ReviewCard} from '../../components'
import {CsOtherProfile} from "./CsOtherProfile";
import { RekomerProfileApiType } from '../../@types/OtherProfileApiType';
import { rekomerProfileApiInitState } from '../../constant/otherProfileApiInitState';
import { FlatList } from 'react-native';
import { ReviewCardType } from '../../@types/ReviewCardType';

const OtherProfile = () => {
   const [data, setData] = useState<RekomerProfileApiType>(rekomerProfileApiInitState)
   const [reviews, setReviews] = useState<ReviewCardType[]>([])
   const [page, setPage] = useState(1);
   const size = 4

   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: '/rekomers/52519880-367c-4fc6-a5e7-bd91fdc7e331/profile',
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
         url: `rekomers/52519880-367c-4fc6-a5e7-bd91fdc7e331/reviews?page=${page}&size=${size}`
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