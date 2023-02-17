import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {CsText} from "./CsText";
import {DishInfoApiType} from "../../@types/DishInfoApiType";

interface DishInfoProps extends DishInfoApiType {
   wrapperStyle?: any
}

const DishInfo = (props: DishInfoProps) => {
   return (
      <View style={[defaultStyle.contain, props.wrapperStyle]}>
         <Image source={{uri: props.image}} style={defaultStyle.img}/>
         <View style={{paddingLeft: 1}}>
            <CsText weight={"bold"} style={{marginTop: 8}} color={'A'} size={'md'}>{props.name}</CsText>
            <CsText numberOfLines={1}>{props.description}</CsText>
            <CsText weight={900} style={{marginTop: 5}} size={'md'}>{props.price}K</CsText>
         </View>
      </View>
   )
}

const defaultStyle = StyleSheet.create({
   contain: {},
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