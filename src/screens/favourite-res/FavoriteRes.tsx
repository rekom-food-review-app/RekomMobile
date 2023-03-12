import { useEffect, useState } from 'react'
import {FlatList, Text, View} from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { FavoriteResApiType } from '../../@types/FavoriteResApiType'
import RekomAxios from '../../api/axios'
import { HeaderBack, RestaurantCard } from '../../components'

const FavoriteRes = () => {
  const [favourite, setFavourite] = useState<FavoriteResApiType[]>([])
  useEffect(() => {
    RekomAxios({
      method: 'get',
      url: 'favourite-restaurants?page=1&size=5',
      responseType: 'json'
    })
    .then(res => {
      let favourite = res.data.favList
      setFavourite(favourite)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])
  return(
    <ScrollView style={{paddingHorizontal: 20, paddingTop: 30, backgroundColor: 'white'}}>
      <HeaderBack title='Favourite' type='secondary' wrapperStyle={{marginBottom: 20}}/> 
      <FlatList 
        data={favourite}
        style={{marginBottom: 100}}
        renderItem={({item}) => <RestaurantCard 
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
    </ScrollView>
  )
}
export {FavoriteRes}