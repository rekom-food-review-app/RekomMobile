import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RegisterNewAccount, RegisterOTP, RegisterUpdateProfile} from './screens';

const App = () => {
  return (
    <View>
      {/* <RegisterNewAccount /> */}
      {/* <RegisterOTP /> */}
      <RegisterUpdateProfile />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  s: {},
});
