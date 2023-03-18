import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useRef, useState } from "react"
import { Dimensions, FlatList, Keyboard, Text, TextInput, View, VirtualizedList } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import { ScrollView } from "react-native-virtualized-view"
import { InputStateType } from "../../@types/InputStateType"
import { RestaurantCardApiType } from "../../@types/RestaurantCardApiType"
import RekomAxios from "../../api/axios"
import { RestaurantCard, SearchBar } from "../../components"

const width = Dimensions.get('window').width

interface RestaurantSearchProps
{
  keyword: string
}

function RestaurantSearch (props: RestaurantSearchProps)
{
  const nav = useNavigation<any>()
  const route = useRoute()

  const keyword = (route.params as any).keyword
  const searchRef = useRef<TextInput>(null);
  const [search, setSearch] = useState<InputStateType>({value: keyword, error: ""})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [restaurantList, setRestaurantList] = useState<RestaurantCardApiType[]>([])

  const [page, setPage] = useState(1)
  const size = 30

  useEffect(() => {
    handleSearch(page)
  }, [page])

  const handleSearch = (p: number) => {
    Keyboard.dismiss()
    if (p == 1) {
      setRestaurantList([])
      setIsLoading(true)
    }
    RekomAxios({
      method: "get",
      url: `search/restaurants?Keyword=${search.value}&Page=${p}&Size=${size}`
    })
    .then((res) => {
      if (p == 1) {
        setRestaurantList(res.data.restaurantList)
        setIsLoading(false)
      }
      else {
        setRestaurantList(restaurantList.concat(res.data.restaurantList))
      }
    })
  }

  // const handleEndReach = () => {
  //   setPage(page + 1)
  // }

  return (
    <View style={{backgroundColor: 'white', minHeight: '100%', width: '100%'}}>
      <SearchBar
        inputValue={search.value as any}
        onBack={() => nav.goBack()} 
        onSubmit={() => handleSearch(1)} 
        onChangeText={(text: string) => setSearch({value: text.trim(), error: ''})} 
        ref={searchRef} placeholder='Search ...'
        wrapperStyle={{paddingHorizontal: 20, zIndex: 100, paddingTop: 30, paddingBottom: 20, position: "absolute"}}/>
      <ScrollView style={{paddingTop: 100}}>
        {/* <VirtualizedList
          data={restaurantList}
          style={{gap: 15, paddingHorizontal: 20}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <RestaurantCard {...item}/>}
          getItem={getRestaurants}
          getItemCount={getRestaurantCount}
          onEndReached={handleEndReach}
          onEndReachedThreshold={3}
          // windowSize={30}
          keyExtractor={(item, index) => item.id}
        /> */}
            <FlatList 
              data={restaurantList}
              windowSize={5}
              style={{gap: 15, paddingHorizontal: 20}}
              renderItem = {({item}) => <RestaurantCard {...item}/>}
              onEndReachedThreshold={3}
              keyExtractor={(item, index) => item.id}
              // onEndReached={handleEndReach}
            />
        {
          isLoading
          ? (
            <SkeletonPlaceholder borderRadius={4}>
              <View style={{paddingHorizontal: 20, flexDirection: 'column', gap: 20}}>
                <View style={{width: '100%', height: 200, borderRadius: 20}}/>
                <View style={{width: '100%', height: 200, borderRadius: 20}}/>
                <View style={{width: '100%', height: 200, borderRadius: 20}}/>
                <View style={{width: '100%', height: 200, borderRadius: 20}}/>
              </View>
            </SkeletonPlaceholder>
          )
          : null
        }
        <View style={{height: 200}}></View>
      </ScrollView>

    </View>
  )
}

export {RestaurantSearch}