import { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from "react-redux";
import { Colors } from "../../assets/colors";
import { setResTab } from "../../global-states";

interface NavigateBarProps {
  wrapperStyle ?: any
  tab: 1 | 2 | 3 | 4
}
const NavigateBar = (props: NavigateBarProps) => {
  const dispatch = useDispatch()
  return (
    <View style={{margin: 20}}>
      <View style={[defaultStyle.navBar, props.wrapperStyle]}>
      <TouchableOpacity onPress={() => {dispatch(setResTab(1))}}>
        <Icon name="smile-o" size={20} style={[defaultStyle.button, tabStyle[props.tab].iOne]}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {dispatch(setResTab(2))}}>
        <Icon name="smile-o" size={20} style={[defaultStyle.button, tabStyle[props.tab].iTwo]}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {dispatch(setResTab(3))}}>
        <Icon name="smile-o" size={20} style={[defaultStyle.button, tabStyle[props.tab].iThree]}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {dispatch(setResTab(4))}}>
        <Icon name="smile-o" size={20} style={[defaultStyle.button, tabStyle[props.tab].iFour]}/>
      </TouchableOpacity>
    </View>
    </View>
  )
}
const defaultStyle = StyleSheet.create({
  navBar: { 
    borderColor: Colors.C, 
    borderWidth: 1, 
    borderRadius: 20, 
    width: '100%', 
    justifyContent: 'center', 
    flexDirection: 'row', 
    gap: 30
  },  
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15
  }
})

const tabStyle ={
  1: StyleSheet.create({
    iOne: {
      color: Colors.A
    },
    iTwo: {
      color: Colors.C
    },
    iThree: {
      color: Colors.C
    },
    iFour: {
      color: Colors.C
    }
  }),
  2: StyleSheet.create({
    iOne: {
      color: Colors.C
    },
    iTwo: {
      color: Colors.A
    },
    iThree: {
      color: Colors.C
    },
    iFour: {
      color: Colors.C
    }
  }),
  3: StyleSheet.create({
    iOne: {
      color: Colors.C
    },
    iTwo: {
      color: Colors.C
    },
    iThree: {
      color: Colors.A
    },
    iFour: {
      color: Colors.C
    }
  }),
  4: StyleSheet.create({
    iOne: {
      color: Colors.C
    },
    iTwo: {
      color: Colors.C
    },
    iThree: {
      color: Colors.C
    },
    iFour: {
      color: Colors.A
    }
  })
}
export {NavigateBar}