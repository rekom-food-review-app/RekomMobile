import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Colors} from '../assets/colors';
import {Button, CsText} from '../components';

const ThirdRegister = () => {
  const LoadLib = async () => {
    try {
      const chooseImg = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
      });
    } catch (error) {}
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.B,
      }}>
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

        <CsText size="lg" weight="bold">
          Be A "Rekomer" Right Now!
        </CsText>

        <Text style={{marginVertical: 20}}>This is the step des</Text>

        <Text style={{marginBottom: 15, textAlign: 'center'}}>
          Let's update your profile
        </Text>

        <Button
          onPress={LoadLib}
          type={'basic'}
          size={'sm'}
          label={'Choose image'}
          wrapperStyle={{alignSelf: 'center'}}
        />
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
export {ThirdRegister};
