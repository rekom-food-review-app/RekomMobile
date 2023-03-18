import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useRef, useState } from "react"
import { Dimensions, FlatList, Keyboard, Text, TextInput, View, VirtualizedList } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import { ScrollView } from "react-native-virtualized-view"
import { DishInfoApiType } from "../../@types/DishInfoApiType"
import { InputStateType } from "../../@types/InputStateType"
import RekomAxios from "../../api/axios"
import { DishInfo, RestaurantCard, SearchBar } from "../../components"

const width = Dimensions.get('window').width

function FoodSearch ()
{
  const nav = useNavigation<any>()
  const route = useRoute()

  const keyword = (route.params as any).keyword
  const searchRef = useRef<TextInput>(null);
  const [search, setSearch] = useState<InputStateType>({value: keyword, error: ""})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [foodList, setFoodList] = useState<DishInfoApiType[]>([])

  const [page, setPage] = useState(1)
  const size = 30

  useEffect(() => {
    handleSearch(page)
  }, [page])

  const handleSearch = (p: number) => {
    Keyboard.dismiss()
    if (p == 1) {
      setFoodList([])
      setIsLoading(true)
    }
    RekomAxios({
      method: "get",
      url: `search/foods?Keyword=${search.value}&Page=${p}&Size=${size}`
    })
    .then((res) => {
      if (p == 1) {
        setFoodList(res.data.foodList)
        setIsLoading(false)
      }
      else {
        setFoodList(foodList.concat(res.data.restaurantList))
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
        <FlatList
        style={{width: '100%', paddingHorizontal: 20}}
        data={foodList} 
        numColumns={2}
        columnWrapperStyle={{alignItems: 'center', flex: 0.5, justifyContent: 'space-between', paddingBottom: 20}}
        renderItem = {({item}) => <DishInfo {...item} wrapperStyle={{width: '48%',}}/>}
        keyExtractor={data => data.id}
        // onEndReached={handleEndReached}
        onEndReachedThreshold={2}
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

export {FoodSearch}