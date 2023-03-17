import { Image, Text, View, VirtualizedList } from "react-native"
import { Feed, FeedProps, HeaderBack,} from "../../components"
import { useState, useEffect } from "react"
import RekomAxios from "../../api/axios";
import { ScrollView } from "react-native-virtualized-view";
import { Colors } from "../../assets/colors";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


const Home = () =>
{
	const [feedList, setFeedList] = useState<FeedProps[]>([])
	const getFeedCount = () => feedList.length
  const getFeeds = (feeds: FeedProps[], index: number) => feedList[index];
  const [isLoading, setIsLoading] = useState<boolean>(false)
	const [page, setPage] = useState<number>(1)
	const size = 10

	useEffect(() => {
		loadFeed()
	}, [page])

	const loadFeed = () => {
    setIsLoading(true)
		RekomAxios({
			method: 'get',
			url: `feeds?Location.Latitude=10.0252955&Location.Longitude=105.0312475&Page=${page}&Size=${size}`,
		})
			.then(res => {
				setIsLoading(false)
				setFeedList((pre) => pre.concat(res.data.feedList)) 
			})
			.catch(e => {
				console.log(e)
			})
	}

	return (
		<ScrollView style={{backgroundColor: Colors.B}}>
			<HeaderBack type={'secondary'} iconRight='map-pin' title="REKOM" wrapperStyle={{marginTop: 30, marginBottom: 20,paddingHorizontal: 20}}/> 
			{
				isLoading 
				? (
					<SkeletonPlaceholder borderRadius={4}>
						<View style={{paddingHorizontal: 20, flexDirection: 'column', gap: 20}}>
							<View style={{width: '100%', height: 200, borderRadius: 20}}></View>
							<View style={{flexDirection:'row', gap: 15}}>
								<View style={{ flexDirection: 'column', gap: 5}}>
									<View style={{width: '100%', height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20}} />
									<Text style={{width: 70, height: 15}}/>
									<Text style={{width: 150, height: 25}}/>
								</View>
								<View style={{ flexDirection: 'column', gap: 5}}>
									<View style={{width: '100%', height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20}} />
									<Text style={{width: 70, height: 15}}/>
									<Text style={{width: 150, height: 25}}/>
								</View>
								<View style={{ flexDirection: 'column', gap: 5}}>
									<View style={{width: '100%', height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20}} />
									<Text style={{width: 70, height: 15}}/>
									<Text style={{width: 150, height: 25}}/>
								</View>
							</View>
							<View>
								<View style={{flexDirection: 'row', marginBottom: 5}}>
									<View style={{width: 50, height: 50, borderRadius: 100, marginRight: 7}}/>
									<View style={{flexDirection: 'column', justifyContent: 'center', gap: 3}}>
										<Text style={{ width: 100, height: 15}} />
										<Text style={{ width: 150, height: 10}} />
									</View>
								</View>
								<View style={{width: '100%', height: 250, borderRadius: 20}} />
							</View>
						</View>
					</SkeletonPlaceholder>
				)
				: (
					<VirtualizedList 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 1, justifyContent: "space-between", paddingLeft: 20}}
          data={feedList}
          style={{marginBottom: 20}}
          renderItem={({item}) => <Feed {...item} />}
          getItem={getFeeds}
          getItemCount={getFeedCount}
          keyExtractor={(item, index) => index.toString()}
					onEndReachedThreshold={5}
					onEndReached={() => {
						setPage(pre => pre + 1)
					}}
        />
				)
			}
			
			
		</ScrollView>
	)
}

export {Home}