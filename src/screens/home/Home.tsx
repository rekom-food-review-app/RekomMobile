import { VirtualizedList } from "react-native"
import { Feed, FeedProps, HeaderBack,} from "../../components"
import { useState, useEffect } from "react"
import RekomAxios from "../../api/axios";
import { ScrollView } from "react-native-virtualized-view";
import { Colors } from "../../assets/colors";

const Home = () =>
{
	const [feedList, setFeedList] = useState<FeedProps[]>([])
	const getFeedCount = () => feedList.length
  const getFeeds = (feeds: FeedProps[], index: number) => feedList[index];

	useEffect(() => {
		RekomAxios({
			 method: 'get',
			 url: '',
		})
			 .then(res => {
					setFeedList(res.data.feedList) 
			 })
			 .catch(e => {
				console.log(e)
			 })
 }, [])
	return (
		<ScrollView style={{backgroundColor: Colors.B}}>
			<HeaderBack type={'secondary'} iconRight='map-pin' title="REKOM" wrapperStyle={{marginTop: 30, marginBottom: 20,paddingHorizontal: 20}}/> 
			<VirtualizedList 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 13, justifyContent: "space-between", paddingLeft: 20}}
          data={feedList}
          horizontal={true}
          style={{marginBottom: 20}}
          renderItem={({item}) => <Feed {...item} />}
          getItem={getFeeds}
          getItemCount={getFeedCount}
          keyExtractor={(item, index) => index.toString()}
        />
		</ScrollView>
	)
}

export {Home}