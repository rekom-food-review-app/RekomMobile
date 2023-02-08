import { StyleSheet, View } from "react-native";
import { Colors } from "../../assets/colors";
// import {CsText} from "./index"

interface TimeLineProps 
{
  wrapperStyle?: any
  step: 1 | 2 | 3
}

function TimeLine(props: TimeLineProps)
{
  return (
    <View style={[defaultStyle.wrapper, props.wrapperStyle]}>
      <View style={[defaultStyle.lineWrapper]}>
        <View style={[defaultStyle.line, stepStyle[props.step].lineOne]}></View>
        <View style={[defaultStyle.line, stepStyle[props.step].lineTwo]}></View>
      </View>
      <View style={[defaultStyle.dotWrapper]}>
        <View style={[defaultStyle.dot, stepStyle[props.step].dotOne]}></View>
        <View style={[defaultStyle.dot, stepStyle[props.step].dotTwo]}></View>
        <View style={[defaultStyle.dot, stepStyle[props.step].dotThree]}></View>
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
    justifyContent: "space-between",
    alignItems: "center"
  },
  dot: {
    width: 13,
    height: 13,
    backgroundColor: Colors.C,
    borderRadius: 100
  }
})

const stepStyle = {
  1: StyleSheet.create({
    lineOne: {

    },
    lineTwo: {

    },
    dotOne: {
      backgroundColor: Colors.A,
      width: 18,
      height: 18
    },
    dotTwo: {

    },
    dotThree: {
      
    }
  }),
  2: StyleSheet.create({
    lineOne: {
      backgroundColor: Colors.A,
      height: 4,
    },
    lineTwo: {

    },
    dotOne: {
      backgroundColor: Colors.A,
      width: 18,
      height: 18,
    },
    dotTwo: {
      backgroundColor: Colors.A,
      width: 18,
      height: 18,
    },
    dotThree: {
      
    }
  }),
  3: StyleSheet.create({
    lineOne: {
      backgroundColor: Colors.A,
      height: 4,
    },
    lineTwo: {
      backgroundColor: Colors.A,
      height: 4,
    },
    dotOne: {
      backgroundColor: Colors.A,
      width: 18,
      height: 18,
    },
    dotTwo: {
      backgroundColor: Colors.A,
      width: 18,
      height: 18,
    },
    dotThree: {
      backgroundColor: Colors.A,
      width: 18,
      height: 18,
    }
  })
}

export {TimeLine}