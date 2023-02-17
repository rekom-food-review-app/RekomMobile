import { StyleSheet, View } from "react-native";
import { Avatar, CsText } from "./index";

interface UserActionInfoProps
{
  wrapperStyle?: any
  text?: string
  avtSize?: any
  avatarUrl: string,
  fullname: string,
  actionDate: string
}

function UserActionInfo(props: UserActionInfoProps)
{
  return (
    <View style={props.wrapperStyle}>
      <View style={[defaultStyle.wrapper]}>
        <Avatar imgUrl={props.avatarUrl} wrapperStyle={defaultStyle.avatar} size={props.avtSize}/>
        <View style={[defaultStyle.infoWrapper]}>
          <CsText style={{marginBottom: 2}} weight={900}>{props.fullname}</CsText>
          <CsText size="xs">{props.actionDate}</CsText>
        </View>
      </View>  
      {
        props.text 
        ? <CsText>{props.text}</CsText>
        : null
      }
    </View>
  )
}

const defaultStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoWrapper: {

  },
  avatar: {
    marginRight: 8
  }
})

export {UserActionInfo}