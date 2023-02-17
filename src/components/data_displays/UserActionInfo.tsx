import {StyleSheet, View, TouchableOpacity} from "react-native";
import {Avatar, CsText} from "./index";

interface UserActionInfoProps
{
   wrapperStyle?: any
   content?: string
   avtSize?: any
   avatarUrl: string,
   fullName: string,
   actionDate: string
   onPressUser?: () => void
}

function UserActionInfo(props: UserActionInfoProps)
{
   return (
      <TouchableOpacity
         // disabled={!!props.onPressUser}
         onPress={props.onPressUser}
         style={props.wrapperStyle}>

         <View style={[defaultStyle.wrapper]}>
            <Avatar imgUrl={props.avatarUrl} wrapperStyle={defaultStyle.avatar} size={props.avtSize}/>
            <View>
               <CsText style={{marginBottom: 2}} weight={900}>{props.fullName}</CsText>
               <CsText size="xs">{props.actionDate}</CsText>
            </View>
         </View>
         { props.content ? <CsText>{props.content}</CsText> : null }
      </TouchableOpacity>
   )
}

const defaultStyle = StyleSheet.create({
   wrapper: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   avatar: {
      marginRight: 8
   }
})

export {UserActionInfo}