import { useRef, useState } from 'react'
import {FlatList, VirtualizedList, TextInput, View, Dimensions, Keyboard, Image, Text} from 'react-native'
import { DishInfoApiType } from '../../@types/DishInfoApiType'
import RekomAxios from '../../api/axios'
import { CsText, DishInfo, RestaurantCard, Title, UserActionInfo } from '../../components'
import { SearchBar } from '../../components/inputs/SearchBar'
import { Colors } from '../../assets/colors'
import {InputStateType} from '../../@types/InputStateType';
import {inputInitState} from '../../constant/inputInitState';
import { RestaurantCardApiType } from '../../@types/RestaurantCardApiType'
import { ScrollView } from 'react-native-virtualized-view'
import { useNavigation } from '@react-navigation/native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const width = Dimensions.get('window').width

interface SearchResultType {
  restaurantList: RestaurantCardApiType[],
  foodList: DishInfoApiType[],
  rekomerList: any[]
}

const Search = () => {
  const [search, setSearch] = useState<InputStateType>(inputInitState)

  const searchRef = useRef<TextInput>(null);

  const [searchResult, setSearchResult] = useState<SearchResultType>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const nav = useNavigation<any>()

  const handleSearch = () => {
    Keyboard.dismiss()
    setIsLoading(true)
    RekomAxios({
      method: 'get',
      url: `search?Keyword=${search.value}&Page=1&Size=5`,
    })
    .then(res => { 
      setIsLoading(false)
      setSearchResult(res.data.result)
    })
    .catch(e => {
      console.log(e)
    })
  }

  const handleBack = () => {
    searchRef.current?.clear()
    Keyboard.dismiss()
    setSearchResult(undefined)
    setSearch({value: "", error: ""})
  }

  const getRestaurantCount = () => searchResult!.restaurantList.length
  const getRestaurants = (restaurants: RestaurantCardApiType[], index: number) => searchResult!.restaurantList[index];

  const getFoodCount = () => searchResult!.foodList.length
  const getFoods = (foods: DishInfoApiType[], index: number) => searchResult!.foodList[index];

  return(
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <SearchBar
        onBack={handleBack} 
        onSubmit={handleSearch} 
        onChangeText={(text: string) => setSearch({value: text.trim(), error: ''})} 
        ref={searchRef} placeholder='Search ...'
        wrapperStyle={{paddingHorizontal: 20, zIndex: 100, paddingTop: 30, paddingBottom: 20, position: "absolute"}}/>
      <ScrollView style={{paddingTop: 100}}>
      {
        isLoading
        ? (
          <SkeletonPlaceholder borderRadius={4}>
            <View style={{paddingHorizontal: 20, flexDirection: 'column', gap: 20}}>
              <View>
                <Text style={{width: 100, height: 20, marginBottom: 15}} />
                <View style={{width: '100%', height: 200, borderRadius: 20}}/>
              </View>
              <View>
                <Text style={{width: 100, height: 20, marginBottom: 15}} />
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
              </View>
              <View>
                <Text style={{width: 100, height: 20, marginBottom: 10}} />
                <View style={{flexDirection: 'column', gap: 5}}>
                  <View style={{flexDirection: 'row', marginBottom: 5}}>
                    <View style={{width: 50, height: 50, borderRadius: 100, marginRight: 7}}/>
                    <View style={{width: 280, height: 50, borderRadius: 10}} />
                  </View>
                  <View style={{flexDirection: 'row', marginBottom: 5}}>
                    <View style={{width: 50, height: 50, borderRadius: 100, marginRight: 7}}/>
                    <View style={{width: 280, height: 50, borderRadius: 10}} />
                  </View>
                </View>
              </View>
            </View>
          </SkeletonPlaceholder>
        )
        : !searchResult
        ? 
          <View style={{justifyContent: "center", alignItems: "center"}}>
            <Image source={require("../../assets/image/shine-fast-food-combo-1.png")}/>
            <CsText style={{alignSelf: "center"}}>Search for Foods, Restaurants and other Rekomers</CsText>
          </View>
        : <>
        <View>
          <Title onPressSeeMore={() => nav.navigate("RestaurantSearch", {keyword: search.value})} titleName='Restaurants' wrapperStyle={{paddingHorizontal: 24}}/>

          <VirtualizedList 
            contentContainerStyle={{gap: 15, paddingHorizontal: 20}}
            data={searchResult!.restaurantList}
            horizontal={true}
            style={{marginBottom: 20}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <RestaurantCard {...item} wrapperStyle={{width: width - 60}}/>
            }
            getItem={getRestaurants}
            getItemCount={getRestaurantCount}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View>
          <Title titleName='Foods' wrapperStyle={{paddingHorizontal: 24}}/>

          <VirtualizedList 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 13, justifyContent: "space-between", paddingHorizontal: 20}}
            data={searchResult!.foodList}
            horizontal={true}
            style={{marginBottom: 20}}
            renderItem={({item}) => <DishInfo wrapperStyle={{width: (width -50)*0.48}} {...item} />}
            getItem={getFoods}
            getItemCount={getFoodCount}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={{paddingHorizontal: 20}}>
          <Title titleName='Rekomers' wrapperStyle={{paddingHorizontal: 4}} />
          <FlatList 
            data={searchResult!.rekomerList}
            renderItem = {({item}) => 
              <UserActionInfo 
                onPressUser={() => nav.navigate('OtherProfileScreen', item.id)}
                wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 100, borderStyle: 'dashed'}} 
                avatarUrl={item.avatarUrl}
                fullName={item.fullName}
                id={item.id}
              />}
            keyExtractor={(item, index) => item.key}
        />
        </View>
        </>
      }
      </ScrollView>
    </View>
  )
}
export {Search}