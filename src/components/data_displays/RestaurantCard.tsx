import { useNavigation } from '@react-navigation/native'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { FavoriteResApiType } from '../../@types/FavoriteResApiType'
import { Colors } from '../../assets/colors'
import { CsText } from '..'

interface FavoriteResProps extends FavoriteResApiType
{
  wrapperStyle?: any
}

const RestaurantCard = (props: FavoriteResProps) => {
  const nav = useNavigation<any>()
  return(
    <TouchableOpacity style={[{position: 'relative'}, props.wrapperStyle]} onPress={() => nav.navigate('RestaurantScreen', {id: props.restaurantId})}>
      <Image source={{uri: props.restaurantCoverImageUrl}} style={{width: '100%', height: 200, borderRadius: 20}}/>
      <View style={{position: 'absolute', bottom: 15, left: 15}}>
        <View style={{flexDirection: 'column', gap: 7}}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <View style={{flexDirection: 'row', gap: 3, backgroundColor: 'white', paddingHorizontal: 10,borderRadius: 20, alignItems: 'center'}}>
              <Image source={require('../../assets/image/golden.png')} style={{width: 20, height: 20}}/>
              <Image source={require('../../assets/image/golden.png')} style={{width: 20, height: 20}}/>
              <Image source={require('../../assets/image/golden.png')} style={{width: 20, height: 20}}/>
              <Image source={require('../../assets/image/golden.png')} style={{width: 20, height: 20}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', alignItems: 'center', gap: 5, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20}}>
              <CsText weight={'700'}>{props.restaurantRatingAverage}</CsText> 
              <Icon name='star' color={Colors.A} size={19}/>
            </View>                           
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20}}>
            <CsText weight={'800'} size='sm' style={{textTransform: 'uppercase'}}>{props.restaurantName}</CsText> 
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export {RestaurantCard}