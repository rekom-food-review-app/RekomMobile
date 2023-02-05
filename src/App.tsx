import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {RegisterNewAccount, RegisterOTP, RegisterUpdateProfile, Login, Home} from './screens';
// @ts-ignore
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

const App = () => {
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View>
        {/* <RegisterNewAccount /> */}
        {/* <RegisterOTP /> */}
        {/* <RegisterUpdateProfile /> */}
        <Login /> 
        {/* <Home/> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;