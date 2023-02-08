import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from "../../assets/colors";

interface NavigateBarProps {
  wrapperStyle ?: any
  tab: 1 | 2 | 3 | 4
}

const NavigateBar = (props: NavigateBarProps) => {
  return (
    <View style={[defaultStyle.navBar, props.wrapperStyle]}>
      <Icon name="smile-o" size={20} style={tabStyle[props.tab].iOne}/>
      <Icon name="smile-o" size={20} style={tabStyle[props.tab].iTwo}/>
      <Icon name="smile-o" size={20} style={tabStyle[props.tab].iThree}/>
      <Icon name="smile-o" size={20} style={tabStyle[props.tab].iFour}/>
  </View>
  )
}
const defaultStyle = StyleSheet.create({
  navBar: { 
    borderColor: Colors.C, 
    borderWidth: 1, 
    borderRadius: 20, 
    padding: 10, 
    width: '100%', 
    marginTop: 20, 
    justifyContent: 'center', 
    flexDirection: 'row', 
    gap: 50
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
      color: Colors.A
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
      color: Colors.A
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