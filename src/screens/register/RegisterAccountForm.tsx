import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/colors';
import {Button, TextField, CsText, SecureTextField} from '../../components';

interface RegisterAccountFormProps
{
  onSubmit?: () => void
}

function RegisterAccountForm(props: RegisterAccountFormProps) {
  return (
    <View style={styles.containInput}>
      <Text style={{textAlign: 'center', marginBottom: 10}}>
        let's create a new account
      </Text>

      <TextField
        wrapperStyle={{width: '100%'}}
        type={'left'}
        size={'lg'}
        placeholder="Username"
      />

      <TextField
        wrapperStyle={{width: '100%'}}
        type={'left'}
        size={'lg'}
        placeholder="Email"
      />

      <SecureTextField
        wrapperStyle={{width: '100%'}}
        type={'left'}
        size={'lg'}
        placeholder="Password"
      />

      <Button
        onPress={props.onSubmit}
        wrapperStyle={{alignSelf: 'flex-end'}}
        type={'primary'}
        size={'sm'}
        label={'Next'}
      />

      <View style={{marginTop: 80, alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 5}}>
        <View style={styles.dot}></View>
        <CsText size='xs' >I agree with <Text style={{textDecorationLine: "underline", fontWeight: "bold"}}>user agreement</Text></CsText>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  containInput: {
    width: '100%',
    alignSelf: 'center',
    gap: 20,
  },
  dot: {
    width: 15,
    height: 15,
    backgroundColor: Colors.A,
    borderRadius: 100
  }
});

export {RegisterAccountForm};
