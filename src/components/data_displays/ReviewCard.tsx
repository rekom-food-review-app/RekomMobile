import { View, Image, StyleSheet, Text } from "react-native"
import { CsText, UserActionInfo } from "./index";
import { Colors } from "../../assets/colors";
import Icon from 'react-native-vector-icons/Feather'


function ReviewCard()
{
  return (
    <View>
      <UserActionInfo wrapperStyle={{marginBottom: 10, paddingHorizontal: 20}}/>
      <View>
        <Image style={{width: "100%", height: 500}} source={{uri: "https://images.unsplash.com/photo-1675416864738-373085409a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}/>
        <View style={{marginHorizontal: 20, paddingVertical: 10}}>
          <CsText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem sunt delectus, accusamus cupiditate sequi suscipit fugit atque culpa ipsa excepturi aliquid ratione! Necessitatibus molestias eos repudiandae quaerat praesentium soluta officia.</CsText>
          <View style={{flexDirection: 'row', gap: 5, marginVertical: 10}}>
            <Icon name='map-pin' size={20}/>
            <CsText weight={600}>An Hai Dong Restaurant - 5kms</CsText>
          </View>
          <View style={defaultStyle.dashedLine}></View>
        </View>
      </View>
    </View>
  )
}
const defaultStyle = StyleSheet.create ({
  dashedLine: {
    borderBottomColor: Colors.C,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 10,
  }
})
export {ReviewCard}