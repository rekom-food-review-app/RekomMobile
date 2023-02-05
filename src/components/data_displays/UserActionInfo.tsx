import { StyleSheet, View } from "react-native";
import { Avatar, CsText } from "./index";

interface UserActionInfoProps
{
  wrapperStyle?: any
}

function UserActionInfo(props: UserActionInfoProps)
{
  return (
    <View style={[defaultStyle.wrapper, props.wrapperStyle]}>
      <Avatar wrapperStyle={defaultStyle.avatar}/>
      <View style={[defaultStyle.infoWrapper]}>
        <CsText style={{marginBottom: 2}} weight={900}>Vu Suy</CsText>
        <CsText size="xs">10m before - Thus 10, 2023</CsText>
      </View>
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