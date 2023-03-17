import {Image, StyleSheet, TouchableOpacity, View} from "react-native"
import {CsText, UserActionInfo} from "./index";
import {Colors} from "../../assets/colors";
import Icon from 'react-native-vector-icons/Feather'
import {IconButton} from "../index";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {ReviewCardType} from "../../@types/ReviewCardType";
import RekomAxios from "../../api/axios";
import { ImageSlider } from "react-native-image-slider-banner";

interface ReviewCardProps extends ReviewCardType {
   numberOfLines?: number
   isEmojiDisplay?: boolean
   wrapperStyle?: any
   textTouchingDisable?: boolean
}

function ReviewCard(props: ReviewCardProps) {
   const [reactIcon, setReactIcon] = useState<string | undefined>(props.myReactionId);
   const nav = useNavigation<any>();
   
   const [reaction, setReaction] = useState({
      "1": props.amountAgree,
      "2": props.amountDisagree,
      "3": props.amountUseful,
   })

   const handleReact = (id: string) => {
      console.log(props.id)
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
      RekomAxios({
         method: 'delete',
         url: `reviews/${props.id}/reactions/${id}`
      })
      .then(res => {
         console.log(res)
      })
      .catch(e => {
         console.log(e)
      })
   }
   
   const react = (id: string) => {
      RekomAxios({
         method: 'post',
         url: `reviews/${props.id}/reactions/${id}`
      })
      .then(res => {
         console.log(res)
      })
      .catch(e => {
         console.log(e)
      })
   }
   const images = props.images
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
               <ImageSlider 
                  caroselImageStyle={{ resizeMode: 'cover' }}
                  data={images.map((item) => {
                     return {img: item}
                  }) as any[]}
                  autoPlay={false}
                  closeIconColor="#fff"
               />
               <IconButton typeBtn={'inactive'} size={'md'}
                  source={require('../../assets/image/face-vomiting.png')}
                  wrapperStyle={{position: 'absolute', right: 15, bottom: 15}}
               >{props.ratingId}</IconButton>
            </View>
            <View style={{marginHorizontal: 20, paddingTop: 10}}>
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
   }
})
export {ReviewCard}