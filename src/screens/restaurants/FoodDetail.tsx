import { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, View, Text  } from 'react-native'
import { FoodDetailType } from '../../@types/FoodDetailApiType'
import RekomAxios from '../../api/axios'
import { Colors } from '../../assets/colors'
import { CsText, HeaderBack, ImgGallery } from '../../components'
import { foodDetailApiInitState } from '../../constant/foodDetailApiInitState'

const FoodDetail = () => {
  const [data, setData] = useState<FoodDetailType>(foodDetailApiInitState)
 
  useEffect(() => {
    RekomAxios({
      method: 'get',
      url: 'foods/1',
      responseType: 'json'
    })
    .then(res => {
      let data = res.data.food
      console.log(data)
      setData(data)
    })
    .catch(e => {
      console.log(e)
    })
  }, [])
  return(
    <ScrollView style={{backgroundColor: Colors.B, width: '100%', height: '100%'}}>
      <HeaderBack wrapperStyle={{position: 'absolute', padding: 20}}/>
      <Image source={{uri: data.primaryImage}} style={{width: '100%', height: 300, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}/>
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
          <CsText style={{textTransform: 'uppercase'}} size={'lg'} weight={900}>{data.name}</CsText>
          <CsText color={'A'} weight='900' size={'md'}>{data.price}$</CsText>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '75%', gap: 5}}>
            <CsText weight={500} size={'md'}>{data.restaurantName}</CsText>
            <CsText>{data.restaurantDescription}</CsText>
            {/* <CsText>27/3 Ngu Hanh Son, Phuong Phuoc My, Quan Son Tra, Da Nang 55000</CsText> */}
            <CsText weight={700}>15 mins - 1.5 km</CsText>
          </View>
          <View style={{flexDirection: 'row', width: '25%', justifyContent: 'space-between', alignItems: 'center'}}>
            <Image source={require('../../assets/image/ggmap.png')} style={{width: 40, height: 40}}/>
            <Image source={require('../../assets/image/grab.png')} style={{width: 40, height: 40}}/>
          </View>
        </View>
      </View>
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={{borderTopRightRadius: 30, borderTopLeftRadius: 30, overflow: 'hidden'}}
        data={data.images}
        numColumns={3}
        columnWrapperStyle={{alignItems: 'center', flex: 0.5, justifyContent: 'space-between', paddingBottom: 2}}
        renderItem = {({item}) => <ImgGallery img={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  )
}
export {FoodDetail}