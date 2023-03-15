import {Image, StyleSheet, TouchableOpacity, View} from "react-native"
import {CsText, UserActionInfo} from "./index";
import {Colors} from "../../assets/colors";
import Icon from 'react-native-vector-icons/Feather'
import {IconButton} from "../index";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {ReviewCardType} from "../../@types/ReviewCardType";
import { imageUrlBase } from "../../constant/imageUrlBase";
import RekomAxios from "../../api/axios";

interface ReviewCardProps extends ReviewCardType {
   numberOfLines?: number
   isEmojiDisplay?: boolean
   wrapperStyle?: any
   textTouchingDisable?: boolean
}

function ReviewCard(props: ReviewCardProps) {
   const [reactIcon, setReactIcon] = useState<string>('');
   const nav = useNavigation<any>();
   
   const [reaction, setReaction] = useState({
      "1": props.amountAgree,
      "2": props.amountDisagree,
      "3": props.amountUseful,
   })
   
   // useEffect(() => {
   //    setReaction({
   //       "1": props.amountAgree,
   //       "2": props.amountDisagree,
   //       "3": props.amountUseful
   //    })
   // }, [props.amountAgree, props.amountDisagree, props.amountUseful])

   const handleReact = (id: string) => {
      if (id == reactIcon) {
         setReaction((pre) => {
            pre[id as keyof typeof pre] = pre[id as keyof typeof pre] - 1
            return pre
         })
         unReact(id)
         setReactIcon('')
      } else { 
         setReactIcon((reactIconPre) => {
            setReaction((pre) => {
               pre[id as keyof typeof pre] = pre[id as keyof typeof pre] + 1
               pre[reactIconPre as keyof typeof pre] = pre[reactIconPre as keyof typeof pre] - 1
               return pre
            })
            return id
         })
         react(id)
      }
   }

   const unReact = (id: string) =>{
         // RekomAxios({
         //    method: 'post',
         //    url: 'reviews/214c76cf-13a0-46e4-a405-01ca9a004b5b/reactions/3'
         // })
         // .then(res => {
         //    console.log(res)
         // })
         // .catch(e => {
         //    console.log(e)
         // })
   }
   
   const react = (id: string) => {
         // RekomAxios({
         //    method: 'post',
         //    url: 'reviews/214c76cf-13a0-46e4-a405-01ca9a004b5b/reactions/3'
         // })
         // .then(res => {
         //    console.log(res)
         // })
         // .catch(e => {
         //    console.log(e)
         // })
   }
   
   return (
      <View style={props.wrapperStyle}>

         <UserActionInfo
            id=""
            onPressUser={() => nav.push("OtherProfileScreen")}
            avatarUrl={`${props.rekomerAvatarUrl}`} 
            createdAt={props.createdAt}
            fullName={props.rekomerFullName}
            wrapperStyle={{marginBottom: 10, paddingHorizontal: 20}}/>
         <View>
            <View>
               <Image style={{width: "100%", height: 300}}
                   source={{uri: `${props.images[0]}`}}/>
               <IconButton typeBtn={'inactive'} size={'md'}
                  source={require('../../assets/image/i1.gif')}
                  wrapperStyle={{position: 'absolute', right: 15, bottom: 15}}
               >{props.ratingId}</IconButton>
            </View>
            <View style={{marginHorizontal: 20, paddingVertical: 10}}>
               <TouchableOpacity disabled={props.textTouchingDisable}
                                 onPress={() => nav.navigate("ReviewCardDetailScreen", props)}><CsText
                  numberOfLines={props.numberOfLines}>{props.content}</CsText></TouchableOpacity>
               <View style={{flexDirection: 'row', gap: 5, marginVertical: 10}}>
                  <Icon name='map-pin' size={20}/>
                  <CsText weight={600}>{props.restaurantName} - 5kms</CsText>
               </View>
               {
                  props.isEmojiDisplay === undefined || props.isEmojiDisplay
                     ? (
                        <>
                           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                              <View style={{flexDirection: 'row', gap: 10}}>
                                 <IconButton
                                    onPress={() => handleReact('1')} size={'sm'}
                                    typeBtn={reactIcon == '1' ? 'active' : 'inactive'}
                                    source={require('../../assets/image/like.png')}>{reaction["1"]}</IconButton>
                                 <IconButton 
                                    onPress={() => handleReact('3')} size={'sm'}
                                    typeBtn={reactIcon == '3' ? 'active' : 'inactive'}
                                    source={require('../../assets/image/soso.png')}>{reaction["3"]}</IconButton>
                                 <IconButton
                                    onPress={() => handleReact('2')} size={'sm'}
                                    typeBtn={reactIcon == '2' ? 'active' : 'inactive'}
                                    source={require('../../assets/image/dislike.png')}>{reaction["2"]}</IconButton>
                              </View>
                              <IconButton onPress={() => nav.navigate("ReviewCardDetailScreen", props)} size={'sm'}
                                          typeBtn={'inactive'}
                                          source={require('../../assets/image/cmt.png')}>{props.amountReply}</IconButton>
                           </View>
                           <View style={defaultStyle.dashedLine}></View>
                        </>
                     ) : null
               }
            </View>
         </View>
      </View>
   )
}

const defaultStyle = StyleSheet.create({
   dashedLine: {
   borderBottomColor: Colors.C,
   borderStyle: 'dashed',
   borderBottomWidth: 1,
   width: '100%',
   marginTop: 30,
   marginBottom: 20
   }
})
export {ReviewCard}