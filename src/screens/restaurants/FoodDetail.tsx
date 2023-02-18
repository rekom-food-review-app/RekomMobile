import { Image } from 'react-native'
import { View, Text } from 'react-native'
import { Colors } from '../../assets/colors'
import { CsText, HeaderBack } from '../../components'

const FoodDetail = () => {
  return(
    <View style={{backgroundColor: Colors.B, width: '100%', height: '100%'}}>
      <HeaderBack wrapperStyle={{position: 'absolute', padding: 20}}/>
      <Image source={require('../../assets/image/food.jpg')} style={{width: '100%', height: 300, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}/>
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
          <CsText style={{textTransform: 'uppercase'}} size={'lg'} weight={900}>Chicken burger</CsText>
          <CsText color={'A'} weight='900' size={'md'}>100$</CsText>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '75%', gap: 5}}>
            <CsText weight={500} size={'md'}>Dong Phuong Restaurant</CsText>
            <CsText>27/3 Ngu Hanh Son, Phuong Phuoc My, Quan Son Tra, Da Nang 55000</CsText>
            <CsText weight={700}>15 mins - 1.5 km</CsText>
          </View>
          <View style={{flexDirection: 'row', width: '25%', justifyContent: 'space-between', alignItems: 'center'}}>
            <Image source={require('../../assets/image/ggmap.png')} style={{width: 40, height: 40}}/>
            <Image source={require('../../assets/image/grab.png')} style={{width: 40, height: 40}}/>
          </View>
        </View>
      </View>
    </View>
  )
}
export {FoodDetail}