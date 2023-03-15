import { useEffect, useState } from 'react'
import {FlatList, Text, View} from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { useDispatch, useSelector } from 'react-redux'
import RekomAxios from '../../api/axios'
import { RootState } from '../../app/store'
import { HeaderBack, RestaurantCard } from '../../components'
import { setFavorite } from '../../global-states'

const FavoriteRes = () => {
  const dispatch = useDispatch()
  const favoriteList = useSelector((state: RootState) => state.favorite.favoriteList)
  useEffect(() => {
    RekomAxios({
      method: 'get',
      url: 'favourite-restaurants?page=1&size=5',
      responseType: 'json'
    })
    .then(res => {
      dispatch(setFavorite(res.data.favList))
    })
    .catch(e => {
      console.log(e)
    })
  }, [])
  return(
    <ScrollView style={{paddingHorizontal: 20, paddingTop: 30, backgroundColor: 'white'}}>
      <HeaderBack title='Favourite' type='secondary' wrapperStyle={{marginBottom: 20}}/> 
      <FlatList 
        data={favoriteList}
        style={{marginBottom: 100}}
        renderItem={({item}) => <RestaurantCard 
                                wrapperStyle={{marginBottom: 15}}
                                id={item.restaurantId} 
                                key={item.id} 
                                name={item.restaurantName}
                                coverImageUrl={item.restaurantCoverImageUrl} 
                                ratingAverage={item.restaurantRatingAverage}/>}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  )
}
export {FavoriteRes}