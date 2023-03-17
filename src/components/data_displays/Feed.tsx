import { useState } from "react";
import { VirtualizedList } from "react-native";
import { View, Dimensions } from "react-native";
import { DishInfoApiType } from "../../@types/DishInfoApiType";
import { RestaurantCardApiType } from "../../@types/RestaurantCardApiType";
import { ReviewCardType } from "../../@types/ReviewCardType";
import { DishInfo } from "./DishInfo";
import { RestaurantCard } from "./RestaurantCard";
import { ReviewCard } from "./ReviewCard";

interface FeedProps
{
  restaurant: RestaurantCardApiType
  foodList: DishInfoApiType[]
  standardReview?: ReviewCardType
}

const width = Dimensions.get('window').width

const Feed = (props: FeedProps) => {
  const getFoodCount = () => props.foodList.length
  const getFoods = (foods: DishInfoApiType[], index: number) => props.foodList[index];
  return(
    <View style={{gap: 20, marginBottom: 20}}>
      <RestaurantCard {...props.restaurant} wrapperStyle={{marginHorizontal: 20}}/>
      <VirtualizedList 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 13, justifyContent: "space-between", paddingLeft: 20}}
          data={props.foodList}
          horizontal={true}
          renderItem={({item}) => <DishInfo {...props.foodList} wrapperStyle={{width: (width - 50)*0.48}} {...item} />}
          getItem={getFoods}
          getItemCount={getFoodCount}
          keyExtractor={(item, index) => index.toString()}
        />
      {
        (props.standardReview ? <ReviewCard {...props.standardReview}/> : <></>)
      }
    </View>
  )
}
export {Feed, type FeedProps}