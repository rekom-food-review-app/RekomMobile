import {View, Text, StyleSheet} from "react-native"
import { Colors } from "../../assets/colors"

interface StarLineProps {
  wrapperStyle ?: any
  children: any
  point: number
}

const StarLine = (props: StarLineProps) => {
  return(
    <View style={defaultStyle.containStarLine}>
      <Text style={defaultStyle.starNum}>{props.children}</Text>
      <View style={defaultStyle.pointWrapper}>
        <View style={defaultStyle.starLineSec}></View>
        <View style={[defaultStyle.starLinePri, {width: `${props.point}%`}]}></View>
      </View>
    </View>
  )
}
const defaultStyle = StyleSheet.create({
  containStarLine: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
  },
  starNum: {
    width:'10%'
  },
  starLinePri: {
    height: 7, 
    backgroundColor: Colors.A, 
    borderRadius: 20,
    position: 'absolute'
  },
  starLineSec: {
    width: '100%', 
    height: 7, 
    backgroundColor: Colors.F, 
    borderRadius: 20,
  },
  pointWrapper: {
    width: '90%', 
    position: 'relative', 
    overflow: 'hidden', 
    borderRadius: 100
  }
})
export {StarLine}