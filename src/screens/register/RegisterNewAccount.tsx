import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/colors';
import {Button, SecureTextField, TextField} from '../../components';

function RegisterNewAccount() {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: Colors.B}}>
      <View
        style={{
          paddingHorizontal: 10,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Image
          style={styles.logo}
          source={require('../../assets/image/thelogo.png')}
        />
        <Text style={styles.title}>Be A "Rekomer" Right Now!</Text>

        <Text style={{marginVertical: 20}}>This is the step des</Text>

        <View style={styles.containInput}>
          <TextField
            wrapperStyle={{width: '100%', marginBottom: 15}}
            type={'left'}
            size={'lg'}
            placeholder="Username"
          />

          <TextField
            wrapperStyle={{width: '100%', marginBottom: 15}}
            type={'left'}
            size={'lg'}
            placeholder="Email"
          />

          <SecureTextField
            wrapperStyle={{width: '100%', marginBottom: 15}}
            type={'left'}
            size={'lg'}
            placeholder="Password"
          />

          <Button
            wrapperStyle={{alignSelf: 'flex-end'}}
            type={'primary'}
            size={'sm'}
            label={'Next'}
          />
        </View>
      </View>
    </View>
  );
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

export {RegisterNewAccount};
