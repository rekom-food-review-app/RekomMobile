import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, TextField} from '../components';
import { Colors } from '../assets/colors';

const SecondRegister = () => {
  return (
    <View style={{width: '100%', height: '100%',backgroundColor: Colors.secondary}}>
      <View
        style={{
          paddingHorizontal: 10,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Image
          style={styles.logo}
          source={require('../assets/image/thelogo.png')}
        />
        <Text style={styles.title}>Be A "Rekomer" Right Now!</Text>

        <Text style={{marginVertical: 20}}>This is the step des</Text>

        <Text style={{textAlign: 'center', marginBottom: 15}}>
          We just send you an OTP code
        </Text>

        <View style={styles.containInput}>
          <TextField
            wrapperStyle={{width: '100%', marginBottom: 15}}
            type={'center'}
            size={'lg'}
            placeholder="OTP"
            keyboardType='numeric'
          />
          <Button
            wrapperStyle={{alignSelf: 'flex-end'}}
            type={'primary'}
            size={'sm'}
            label={'Verify'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <Text
            style={{width: '60%', textAlign: 'center', alignItems: 'center'}}>
            The OTP only work in 60s left, can't see your OTP?
          </Text>
        </View>
        <Button type={'basic'} size={'sm'} label={'Resend'}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 70,
    marginLeft: -10,
    marginVertical: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  containInput: {
    width: '100%',
    alignSelf: 'center',
  },
});
export {SecondRegister};
