import { ScrollView } from "react-native-virtualized-view"
import { Image, StyleSheet, View } from 'react-native'
import { CsText } from "../../components"
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from "react-native/Libraries/NewAppScreen"

const RecommendedRestaurant = () => {
  return(
    <ScrollView style={{paddingHorizontal: 20, marginVertical: 20}}> 
      <Image source={{uri: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}} style={defaultStyle.img}/>
      <CsText weight={500} size={'lg'}>The stranger things</CsText>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <Icon name="home" size={15}/>
        <CsText style={{alignSelf: 'center'}}>An Hai Dong restaurant Da Nang - 5km</CsText>
      </View>
      <View style={defaultStyle.dashedLine}></View>
    </ScrollView>
  )
}

const defaultStyle = StyleSheet.create({
  img: {
    width: '100%', 
    height: 250,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  dashedLine: {
    borderBottomColor: Colors.B,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 30
  }
})
export {RecommendedRestaurant}