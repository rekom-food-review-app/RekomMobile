import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {CsText} from "./CsText";
import {DishInfoApiType} from "../../@types/DishInfoApiType";
import { useNavigation } from "@react-navigation/native";

interface DishInfoProps extends DishInfoApiType {
   wrapperStyle?: any
}

const DishInfo = (props: DishInfoProps) => {
   const nav = useNavigation<any>()
   return (
      <View style={[defaultStyle.contain, props.wrapperStyle]}>
         <Image source={{uri: props.imageUrl}} style={defaultStyle.img}/>
         <View style={{paddingLeft: 1}}>
            <TouchableOpacity onPress={() => nav.navigate('Food')}><CsText weight={"bold"} style={{marginTop: 8}} color={'A'} size={'md'}>{props.name}</CsText></TouchableOpacity>
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