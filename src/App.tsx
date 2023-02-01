import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RegisterNewAccount, SecondRegister, ThirdRegister} from './screens';

const App = () => {
  return (
    <View>
      {/* <RegisterNewAccount /> */}
      {/* <SecondRegister /> */}
      <ThirdRegister />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  s: {},
});
