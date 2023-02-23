import {Image, StyleSheet, TouchableOpacity, View} from "react-native"
import {CsText, UserActionInfo} from "./index";
import {Colors} from "../../assets/colors";
import Icon from 'react-native-vector-icons/Feather'
import {IconButton} from "../index";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {ReviewCardType} from "../../@types/ReviewCardType";

interface ReviewCardProps extends ReviewCardType {
   numberOfLines?: number
   isEmojiDisplay?: boolean
   wrapperStyle?: any
   textTouchingDisable?: boolean
}

function ReviewCard(props: ReviewCardProps) {
   const [reactIcon, setReactIcon] = useState<string>('');
   const nav = useNavigation<any>();

   const react = (tag: string) => {
      if (tag == reactIcon) {
         setReactIcon('')
      } else {
         setReactIcon(tag)
      }
   }

   return (
      <View style={props.wrapperStyle}>

         <UserActionInfo
            onPressUser={() => nav.push("OtherProfileScreen")}
            avatarUrl={props.rekomerAvatarUrl}
            actionDate={props.reviewTime}
            fullName={props.rekomerName}
            wrapperStyle={{marginBottom: 10, paddingHorizontal: 20}}/>

         <View>
            <View>
               <Image style={{width: "100%", height: 300}}
                   source={{uri: props.reviewMedias[1].mediaUrl}}/>
               <IconButton typeBtn={'inactive'} size={'md'}
               source={require('../../assets/image/che.gif')}
               wrapperStyle={{position: 'absolute', right: 15, bottom: 15}}
               >{'Chê Chê Chê'}</IconButton>
            </View>
            <View style={{marginHorizontal: 20, paddingVertical: 10}}>
               <TouchableOpacity disabled={props.textTouchingDisable}
                                 onPress={() => nav.navigate("ReviewCardDetailScreen")}><CsText
                  numberOfLines={props.numberOfLines}>{props.reviewContent}</CsText></TouchableOpacity>
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
                                    onPress={() => react('A')} size={'sm'}
                                    typeBtn={reactIcon == 'A' ? 'active' : 'inactive'}
                                    source={require('../../assets/image/like.png')}>{props.amountLike.toLocaleString()}</IconButton>
                                 <IconButton onPress={() => react('B')} size={'sm'}
                                             typeBtn={reactIcon == 'B' ? 'active' : 'inactive'}
                                             source={require('../../assets/image/soso.png')}>{props.amountHelpful.toLocaleString()}</IconButton>
                                 <IconButton
                                    onPress={() => react('C')} size={'sm'}
                                    typeBtn={reactIcon == 'C' ? 'active' : 'inactive'}
                                    source={require('../../assets/image/dislike.png')}>{props.amountDislike.toLocaleString()}</IconButton>
                              </View>
                              <IconButton onPress={() => nav.navigate("ReviewCardDetailScreen")} size={'sm'}
                                          typeBtn={'inactive'}
                                          source={require('../../assets/image/cmt.png')}>{props.amountComment.toLocaleString()}</IconButton>
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
   marginTop: 30
   }
})
export {ReviewCard}