import { useEffect, useRef, useState } from 'react'
import {FlatList, VirtualizedList, TextInput, View, Dimensions, Text} from 'react-native'
import { DishInfoApiType } from '../../@types/DishInfoApiType'
import RekomAxios from '../../api/axios'
import { DishInfo, RestaurantCard, Title, UserActionInfo } from '../../components'
import { SearchBar } from '../../components/inputs/SearchBar'
import { Colors } from '../../assets/colors'
import {InputStateType} from '../../@types/InputStateType';
import {inputInitState} from '../../constant/inputInitState';
import { RestaurantCardApiType } from '../../@types/RestaurantCardApiType'
import { ScrollView } from 'react-native-virtualized-view'

const width = Dimensions.get('window').width

const Search = () => {
  const [restaurantList, setRestaurantList] = useState<RestaurantCardApiType[]>([])
  const [foodList, setFoodList] = useState<DishInfoApiType[]>([])
  const [rekomerList, setRekomerList] = useState()
  const [search, setSearch] = useState<InputStateType>(inputInitState)
  const searchRef = useRef<TextInput>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, [])

  const handleSearch = () => {
    RekomAxios({
      method: 'get',
      url: `search?Keyword=${search.value}&Page=1&Size=5`,
    })
    .then(res => { 
      setRestaurantList(res.data.result.restaurantList)
      setFoodList(res.data.result.foodList)
      setRekomerList(res.data.result.rekomerList)
    })
    .catch(e => {
      console.log(e)
      console.log('ui')
    })
  }

  const getRestaurantCount = () => restaurantList.length
  const getFoodCount = () => foodList.length

  const getRestaurants = (restaurants: RestaurantCardApiType[], index: number) => restaurantList[index];
  const getFoods = (foods: DishInfoApiType[], index: number) => foodList[index];
  return(
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <SearchBar 
        onPress={handleSearch} 
        onChangeText={(text: string) => setSearch({value: text.trim(), error: ''})} 
        ref={searchRef} placeholder='I know you&apos;re almost gone'
        wrapperStyle={{marginHorizontal: 20, zIndex: 100, marginTop: 40, marginBottom: 20, position: "absolute"}}/>
      <ScrollView style={{paddingTop: 110}}>
      <View>
        <Title titleName='Restaurants' wrapperStyle={{paddingHorizontal: 24}}/>

        <VirtualizedList 
          contentContainerStyle={{gap: 15, paddingLeft: 20}}
          data={restaurantList}
          horizontal={true}
          style={{marginBottom: 20}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <RestaurantCard 
            wrapperStyle={{width: width - 60}}
            id={item.id} 
            key={item.id} 
            name={item.name}
            coverImageUrl={item.coverImageUrl} 
            ratingAverage={item.ratingAverage} 
            />
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
          contentContainerStyle={{gap: 13, justifyContent: "space-between", paddingLeft: 20}}
          data={foodList}
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
          data={rekomerList}
          renderItem = {({item}) => 
            <UserActionInfo 
              wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 100, borderStyle: 'dashed'}} 
              avatarUrl={item.avatarUrl}
              fullName={item.fullName}
              id={item.id}
            />}
          keyExtractor={(item, index) => item.key}
      />
      </View>

      
      </ScrollView>
    </View>
  )
}
export {Search}