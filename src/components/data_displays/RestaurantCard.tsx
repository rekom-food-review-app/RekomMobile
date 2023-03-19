import { useNavigation } from '@react-navigation/native'
import {Image, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../assets/colors'
import { CsText } from '..'
import { RestaurantCardApiType } from '../../@types/RestaurantCardApiType'

interface RestaurantCardProps extends RestaurantCardApiType
{
  wrapperStyle?: any
}

const RestaurantCard = (props: RestaurantCardProps) => {
  const nav = useNavigation<any>()

  // const [commentListLength, setCommentListLength]

  return(
    <View style={props.wrapperStyle}>
      <TouchableOpacity style={[{position: 'relative'}]} onPress={() => nav.navigate('RestaurantScreen', {id: props.id})}>
      <Image source={{uri: props.coverImageUrl}} style={{width: '100%', height: 200, borderRadius: 20}}/>
      <View style={{position: 'absolute', bottom: 15, left: 15}}>
        <View style={{flexDirection: 'column', gap: 7}}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <View style={{flexDirection: 'row', gap: 3, backgroundColor: 'white', paddingHorizontal: 10,borderRadius: 20, alignItems: 'center'}}>
              <Image source={require('../../assets/image/golden.png')} style={{width: 20, height: 20}}/>
              <Image source={require('../../assets/image/golden.png')} style={{width: 20, height: 20}}/>
              <Image source={require('../../assets/image/golden.png')} style={{width: 20, height: 20}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', alignItems: 'center', gap: 5, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20}}>
              <CsText weight={'700'}>{props.ratingAverage}</CsText> 
              <Icon name='star' color={Colors.A} size={19}/>
            </View>                           
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20}}>
            <CsText weight={'800'} size='sm' style={{textTransform: 'uppercase'}}>{props.name}</CsText> 
          </View>
        </View>
      </View>
    </TouchableOpacity>
    </View>
  )
}

export {RestaurantCard}