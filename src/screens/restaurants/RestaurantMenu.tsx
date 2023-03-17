
import { DishInfo } from "../../components"
import { FlatList, View, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import RekomAxios from "../../api/axios";
import { DishInfoApiType } from "../../@types/DishInfoApiType";

interface RestaurantMenuProps
{
  restaurantId: string
}

const RestaurantMenu = (props: RestaurantMenuProps) => {
  const [data, setData] = useState<DishInfoApiType[]>([])
  const [page, setPage] = useState(1);
  const size = 4

  useEffect(() => {
    RekomAxios({
      method: 'get',
      url: `restaurants/${props.restaurantId}/foods?page=${page}&size=${size}`,
      responseType: 'json'
    })
    .then(res => {
      let data = res.data.foods
      setData((pre) => {
        return pre.concat(data)
      })
    })
    .catch(e => {
      console.log(e)
    })
  }, [page])
  const handleEndReached = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return(
    <View style={{paddingHorizontal: 20}}>
      {
        data.length > 0
        ? <FlatList
        style={{width: '100%'}}
        data={data} 
        numColumns={2}
        columnWrapperStyle={{alignItems: 'center', flex: 0.5, justifyContent: 'space-between', paddingBottom: 20}}
        renderItem = {({item}) => <DishInfo description={item.description} id={item.id} wrapperStyle={{width: '48%',}} imageUrl={item.imageUrl} price={item.price} name={item.name}/>}
        keyExtractor={data => data.id}
        onEndReached={handleEndReached}
        onEndReachedThreshold={2}
        />
        : null
      }
    </View>
  )
}

const style = StyleSheet.create({
})

export {RestaurantMenu}