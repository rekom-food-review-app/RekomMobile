import { useEffect, useRef, useState } from 'react'
import {FlatList, Text, TextInput, View} from 'react-native'
import { DishInfoApiType } from '../../@types/DishInfoApiType'
import RekomAxios from '../../api/axios'
import { CsText, DishInfo, Title, UserActionInfo } from '../../components'
import { SearchBar } from '../../components/inputs/SearchBar'
import { FavoriteResComponent } from '../favourite-res'
import { FavoriteResApiType } from '../../@types/FavoriteResApiType'
import { Colors } from '../../assets/colors'



const Search = () => {
  const [recomRes, setRecomRes] = useState<FavoriteResApiType[]>([])
  const [recomFood, setRecomFood] = useState<DishInfoApiType[]>([])
  const [recomUser, setRecomUser] = useState()
  const searchRef = useRef<TextInput>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, [])

  // useEffect(() => {
  //   RekomAxios({
  //     method: 'get',
  //     url: '',
  //   })
  //   .then(res => {
  //     let recomRes = res.data
  //     let recomFood = res.data
  //     let recomUser = res.data
  //     setRecomRes(recomRes)
  //     setRecomFood(recomFood)
  //     setRecomUser(recomUser)
  //   })
  //   .catch(e => {
  //     console.log(e)
  //   })
  // }, [])

  return(
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <SearchBar ref={searchRef} placeholder='I know you&apos;re almost gone' wrapperStyle={{marginHorizontal: 20, marginTop: 40, marginBottom: 20}}/>
      <View style={{paddingLeft: 20}}>
        <Title titleName='Restaurants' wrapperStyle={{paddingRight: 20}}/>
        <FlatList 
          data={recomRes}
          horizontal={true}
          style={{marginBottom: 20}}
          renderItem={({item}) => <FavoriteResComponent 
                                  wrapperStyle={{marginBottom: 15}}
                                  restaurantId={item.restaurantId} 
                                  key={item.id} 
                                  restaurantName={item.restaurantName}
                                  restaurantCoverImageUrl={item.restaurantCoverImageUrl} 
                                  restaurantRatingAverage={item.restaurantRatingAverage} 
                                  createdAt={item.createdAt} 
                                  id={item.id}/>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={{paddingLeft: 20}}>
      <Title titleName='Foods' wrapperStyle={{paddingRight: 20}}/>
        <FlatList
          style={{width: '100%', marginBottom: 20}}
          data={recomFood} 
          numColumns={2}
          columnWrapperStyle={{alignItems: 'center', flex: 0.5, justifyContent: 'space-between', paddingBottom: 20}}
          renderItem = {({item}) => <DishInfo id={item.id} wrapperStyle={{width: '48%',}} imageUrl={item.imageUrl} price={item.price} name={item.name}/>}
          keyExtractor={data => data.id}
        />
      </View>

      <View style={{paddingHorizontal: 20}}>
        <Title titleName='People' />
        <UserActionInfo 
          wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
          avatarUrl='https://images.unsplash.com/photo-1678203822791-6ae64ce46855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
          fullName='hi'
          createdAt='05/03/23, Sunday'
          id='' 
        />
      </View>
      <FlatList 
        data={recomUser}
        renderItem = {({item}) => 
          <UserActionInfo 
            wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
            avatarUrl={item.avatarUrl}
            fullName={item.fullName}
            createdAt={item.createdAt}
            id={item.id}
          />}
        keyExtractor={(item, index) => item.key}
      /> 
    </View>
  )
}
export {Search}