import {useEffect, useState} from "react"
import {FlatList, View,} from "react-native"
import {ReviewCard} from "../../components"
import RekomAxios from '../../api/axios';
import {ReviewCardType} from "../../@types/ReviewCardType";

interface RestaurantNewsletterProps {
   reviews: ReviewCardType[],
   onEndReached?: () => void
}

const RestaurantNewsletter = (props: RestaurantNewsletterProps) => {
   return (
      <FlatList 
         data={props.reviews}
         renderItem = {({item}) => <ReviewCard key={item.id} {...item}/>}
         keyExtractor={(item, index) => index.toString()}
         onEndReached={props.onEndReached}
         onEndReachedThreshold={2}
      />
   )
}
export {RestaurantNewsletter}