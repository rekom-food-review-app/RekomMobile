import React from "react";
import { Image, StyleSheet, Text, View ,Dimensions} from "react-native";
import { CsText } from "./CsText";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
interface DishInfoProps {
  wrapperStyle?: any
  price: number,
  foodName: string,
  des: string
}
const DishInfo = (props: DishInfoProps) => {
  return(
    <View style={[defaultStyle.contain, props.wrapperStyle]}>
      <Image source={{uri: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80"}} style={defaultStyle.img}/>
      <CsText weight={400} size={'md'}>{props.foodName}</CsText>
      <CsText>{props.des}</CsText>
      <CsText weight={500} size={'md'}>{props.price}K</CsText>
    </View>
  )
}
const defaultStyle = StyleSheet.create({
  contain: {
  },
  img: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  }
})
export {DishInfo}