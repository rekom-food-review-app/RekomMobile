import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// @ts-ignore
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Home, RegisterLayout, Intro} from './screens';
import {RegisterNav} from "./navigations"
import { store } from './app/store'
import { Provider } from 'react-redux'

// export type RootStackParams = {
//   IntroScreen: any
//   RegisterScreen: any
// }

export const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <RootStack.Navigator>
          <RootStack.Screen options={{title: "", headerShown: false}} name='LoginScreen' component={Login}/>
          <RootStack.Screen options={{title: ""}} name='RegisterScreen' component={RegisterLayout}/>
          <RootStack.Screen options={{title: ""}} name='IntroScreen' component={Intro}/>
          <RootStack.Screen options={{title: ""}} name='HomeScreen' component={Home}/>
        </RootStack.Navigator>

      </NavigationContainer>
    </Provider>
  );
};

export default App;