import { View, Text } from "react-native"
import { HeaderBack, ReviewCard, UserActionInfo } from "../../components"
import { ReviewCardType } from "../../@types/ReviewCardType";
import { useState, useEffect } from "react"
import RekomAxios from "../../api/axios";
import { ScrollView } from "react-native-virtualized-view";
import { Colors } from "../../assets/colors";
import { RecommendedRestaurant } from "./index";

function Home()
{
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
	return (
		<ScrollView style={{backgroundColor: Colors.B}}>
			<HeaderBack type={'secondary'} iconRight='map-pin' title="REKOM" wrapperStyle={{marginTop: 30, marginBottom: 20,paddingHorizontal: 20}}/> 
			<View style={{gap: 20}}>
         {
            data.map((item: ReviewCardType) => {
               return <ReviewCard key={item.reviewId} {...item}/>
            })
         }
    	</View>
			<RecommendedRestaurant />
		</ScrollView>
	)
}

export {Home}