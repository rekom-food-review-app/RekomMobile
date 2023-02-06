import { StyleSheet, View } from "react-native";
import { Colors } from "../../assets/colors";
// import {CsText} from "./index"

interface TimeLineProps 
{
  wrapperStyle?: any
}

function TimeLine(props: TimeLineProps)
{
  return (
    <View style={[defaultStyle.wrapper, props.wrapperStyle]}>
      <View style={[defaultStyle.lineWrapper]}>
        <View style={[defaultStyle.line]}></View>
        <View style={[defaultStyle.line]}></View>
      </View>
      <View style={[defaultStyle.dotWrapper]}>
        <View style={[defaultStyle.dot]}></View>
        <View style={[defaultStyle.dot]}></View>
        <View style={[defaultStyle.dot]}></View>
      </View>
    </View>
  )
}

const defaultStyle = StyleSheet.create({
  wrapper: {
    width: "100%",
    position: "relative",
    justifyContent: "center"
  },
  lineWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute"
  },
  line: {
    width: "50%",
    height: 1.5,
    backgroundColor: Colors.C
  },
  dotWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dot: {
    width: 13,
    height: 13,
    backgroundColor: Colors.C,
    borderRadius: 100
  }
})

export {TimeLine}