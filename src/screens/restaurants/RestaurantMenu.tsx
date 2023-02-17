
import { DishInfo } from "../../components"
import { FlatList, View, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import RekomAxios from "../../api/axios";
import { DishInfoApiType } from "../../@types/DishInfoApiType";
import { menuApiInitState } from "../../constant/menuApiInitState";

const RestaurantMenu = () => {
  const [data, setData] = useState<DishInfoApiType[]>([])
  
  useEffect(() => {
    RekomAxios({
      method: 'get',
      url: '/feed/restaurants/7037ac28-31e7-42a9-a238-fd13530ae6f5/menu',
      responseType: 'json'
    })
    .then(res => {
      let data = res.data.menu
      console.log(data)
      setData(data)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  return(
    <View style={{paddingHorizontal: 20}}>
      {
        data.length > 0
        ? <FlatList
        style={{width: '100%'}}
        data={data} 
        numColumns={2}
        columnWrapperStyle={{alignItems: 'center', flex: 0.5, justifyContent: 'space-between', paddingBottom: 20}}
        renderItem = {({item}) => <DishInfo id={item.id} description={item.description} wrapperStyle={{width: '48%',}} image={item.image} price={item.price} name={item.name}/>}
        keyExtractor={data => data.id}/>
        : null
      }
    </View>
  )
}

const style = StyleSheet.create({
})

export {RestaurantMenu}