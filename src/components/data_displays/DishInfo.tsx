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
      <TouchableOpacity style={[defaultStyle.contain, props.wrapperStyle]} onPress={() => nav.navigate('Food', props)}>
         <Image source={{uri: props.imageUrl}} style={defaultStyle.img}/>
         <View style={{paddingLeft: 1}}>
            <CsText weight={600} numberOfLines={1} style={{marginTop: 8}} color={'E'} size={'md'}>{props.name}</CsText>
            <CsText numberOfLines={2} style={{marginTop: 5}} size={'xs'}>{props.description}K</CsText>
         </View>
      </TouchableOpacity>
   )
}

const defaultStyle = StyleSheet.create({
   contain: {

   },
   img: {
      width: '100%',
      height: 160,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
   }
})

export {DishInfo}