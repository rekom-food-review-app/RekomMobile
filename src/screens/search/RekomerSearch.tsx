import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useRef, useState } from "react"
import { Dimensions, FlatList, Keyboard, Text, TextInput, View, VirtualizedList } from "react-native"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import { ScrollView } from "react-native-virtualized-view"
import { InputStateType } from "../../@types/InputStateType"
import { RestaurantCardApiType } from "../../@types/RestaurantCardApiType"
import RekomAxios from "../../api/axios"
import { Colors } from "../../assets/colors"
import { SearchBar, UserActionInfo } from "../../components"

const width = Dimensions.get('window').width


function RekomerSearch ()
{
  const nav = useNavigation<any>()
  const route = useRoute()

  const keyword = (route.params as any).keyword
  const searchRef = useRef<TextInput>(null);
  const [search, setSearch] = useState<InputStateType>({value: keyword, error: ""})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [rekomerList, setRekomerList] = useState<any[]>([])

  const [page, setPage] = useState(1)
  const size = 30

  useEffect(() => {
    handleSearch(page)
  }, [page])

  const handleSearch = (p: number) => {
    Keyboard.dismiss()
    if (p == 1) {
      setRekomerList([])
      setIsLoading(true)
    }
    RekomAxios({
      method: "get",
      url: `search/rekomers?Keyword=${search.value}&Page=${p}&Size=${size}`
    })
    .then((res) => {
      if (p == 1) {
        setRekomerList(res.data.rekomerList)
        setIsLoading(false)
      }
      else {
        setRekomerList(rekomerList.concat(res.data.rekomerList))
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
          style={{gap: 10, paddingHorizontal: 20}}
          data={rekomerList}
          renderItem = {({item}) => 
            <UserActionInfo
              onPressUser={() => nav.navigate('OtherProfileScreen', {rekomerId: item.id})}
              wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, borderStyle: 'dashed'}} 
              {...item}
              createdAt={item.description}
            />}
          keyExtractor={(item, index) => item.id}
        />
        {
          isLoading
          ? (
            <SkeletonPlaceholder borderRadius={4}>
              <View style={{paddingHorizontal: 20, flexDirection: 'column', gap: 15}}>
                <View style={{width: '100%', height: 60, borderRadius: 20}}/>
                <View style={{width: '100%', height: 60, borderRadius: 20}}/>
                <View style={{width: '100%', height: 60, borderRadius: 20}}/>
                <View style={{width: '100%', height: 60, borderRadius: 20}}/>
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

export {RekomerSearch}