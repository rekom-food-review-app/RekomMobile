import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// @ts-ignore
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RegisterAccountForm, UpdateProfileForm, ConfirmOtpForm, Login, Home, RegisterLayout, Intro} from './screens';
import {RegisterNav} from "./navigations"

export const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <RootStack.Navigator>
        <RootStack.Screen options={{title: "", headerShown: false}} name='Intro'  component={Intro}/>
        <RootStack.Screen options={{title: ""}} name='Register' component={RegisterLayout}/>
        <RootStack.Screen name='Login' component={Login} />
        {/* <RootStack.Screen name='Register2' component={RegisterNav}/> */}
        {/* <RootStack.Screen options={{headerShown: false}} name="RegisterNewAccount" component={RegisterAccountForm}/> */}
        {/* <RootStack.Screen options={{headerShown: false}} name="RegisterOTP" component={ConfirmOtpForm}/> */}
        {/* <RootStack.Screen options={{headerShown: false}} name="RegisterUpdateProfile" component={UpdateProfileForm}/> */}
      </RootStack.Navigator>
      
    </NavigationContainer> 
  );
};

export default App;