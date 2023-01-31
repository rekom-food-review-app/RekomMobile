import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../assets/colors'

const ThirdRegister = () => {
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

        <Text style={{marginBottom: 15, textAlign: 'center'}}>Let's update your profile</Text>
        
        </View>
    </View>
  )
}
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
export {ThirdRegister}
