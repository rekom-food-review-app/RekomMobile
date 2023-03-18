import {StyleSheet, View, TouchableOpacity} from "react-native";
import {Avatar, CsText} from "./index";

interface UserActionInfoProps
{
   wrapperStyle?: any
   content?: string
   createdAt?: string
   avtSize?: any
   avatarUrl: string,
   fullName: string,
   id: string,
   onPressUser?: () => void
}

function displayFriendlyDatetime(datetimeString: string): string {
   const datetime = new Date(datetimeString);
   const now = new Date();
 
   const diff = (now.getTime() - datetime.getTime()) / 1000; // convert milliseconds to seconds
 
   // less than 1 minute ago
   if (diff < 60) {
     return 'Just now';
   }
 
   // less than 1 hour ago
   if (diff < 3600) {
     const minutes = Math.floor(diff / 60);
     return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
   }
 
   // less than 1 day ago
   if (diff < 86400) {
     const hours = Math.floor(diff / 3600);
     return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
   }
 
   // more than 1 day ago
   const options = { month: 'short', day: 'numeric' };

   const result = datetime.toLocaleDateString('UTC', options as any)
   if(result == 'Invalid Date'){
      return datetimeString
   }
   return result;
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
               <CsText size="xs">{displayFriendlyDatetime(props.createdAt ?? '')}</CsText>
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