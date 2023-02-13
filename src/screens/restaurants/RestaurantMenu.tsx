
import { DishInfo } from "../../components"
import { FlatList, View, Dimensions, StyleSheet } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

interface ItemData {
  id: string
  price: number
  foodName: string
  des: string
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    price: 100,
    foodName: 'Slalalala',
    des: 'mot con vit'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    price: 300,
    foodName: 'Slililili',
    des: 'mot con vit'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    price: 200,
    foodName: 'Slulululu',
    des: 'xoe ra 2 con thang lang con'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    price: 400,
    foodName: 'Slolololo',
    des: 'that la zui zui zui'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    price: 400,
    foodName: 'Slelelele',
    des: 'that la hay hay hay'
  }
];

const RestaurantMenu = () => {

  return(
    <View style={{paddingHorizontal: 20}}>
      <FlatList
        style={{width: '100%'}}
        data={DATA} 
        numColumns={2}
        columnWrapperStyle={{alignItems: 'center', flex: 0.5, justifyContent: 'space-between', paddingBottom: 20}}
        renderItem = {({item}) => <DishInfo wrapperStyle={{width: '48%',}} price={item.price} foodName={item.foodName} des={item.des}/>}
        keyExtractor={item => item.id}/>
    </View>
  )
}

const style = StyleSheet.create({
})

export {RestaurantMenu}