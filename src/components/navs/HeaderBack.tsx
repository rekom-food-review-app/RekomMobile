import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle, StyleSheetProperties, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from "../../assets/colors";
import { CsText } from "../data_displays";
import {useNavigation} from "@react-navigation/native"


interface HeaderBackProps
{
  wrapperStyle?: ViewStyle,
  type?: keyof typeof headerStyle,
  iconLeft?: string,
  iconRight?: string,
  title?: string
}

function HeaderBack(props: HeaderBackProps)
{
  const nav = useNavigation()

  return (
    <View style={[style.wrapperStyle, props.wrapperStyle]}>
      <View style={[style.header, headerStyle[props.type || "primary"].header]}>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Icon style={[style.iconLeft, headerStyle[props.type || "primary"].iconLeft]} name={props.iconLeft || "chevron-left"} size={27} color={Colors.B}/>
        </TouchableOpacity>
        {
          props.title
          ? <CsText size="md" weight={900} color='A' style={{alignSelf: "center"}}>{props.title}</CsText>
          : null
        }
        <TouchableOpacity>
          <Icon style={[style.iconRight, headerStyle[props.type || "primary"].iconRight]} name={props.iconRight || "more-vertical"} size={27} color={Colors.B}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  wrapperStyle: {
    zIndex: 1000,
    width: "100%"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconLeft: {
    
  }, 
  iconRight: {

  }
})

const headerStyle = {
  primary: StyleSheet.create({
    
  }),
  secondary: StyleSheet.create<any>({
    header: {
      borderRadius: 100,
      borderWidth: 1,
      borderColor: Colors.C,
      padding: 8,
      backgroundColor: "white"
    },
    iconLeft: {
      paddingHorizontal: 10,
      paddingVertical: 3,
      color: Colors.E
    }, 
    iconRight: {
      paddingHorizontal: 10,
      paddingVertical: 3,
      color: Colors.E
    }
  })
}

export {HeaderBack}