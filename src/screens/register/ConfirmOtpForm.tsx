import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextField} from '../../components';


interface ConfirmOtpFormProps
{
  onSubmit?: () => void
}

const ConfirmOtpForm = (props: ConfirmOtpFormProps) => {
  return (
    <View>
      <Text style={{textAlign: 'center', marginBottom: 10}}>
        We just send you an OTP code
      </Text>

      <View style={styles.containInput}>
        <TextField
          wrapperStyle={{width: '100%', marginBottom: 15}}
          type={'center'}
          size={'lg'}
          placeholder="OTP"
          keyboardType="numeric"
        />
        <Button
          onPress={props.onSubmit}
          wrapperStyle={{alignSelf: 'flex-end'}}
          type={'primary'}
          size={'sm'}
          label={'Verify'}
        />
      </View>

      <View style={styles.noti}>
        <Text
          style={{width: '60%', textAlign: 'center', alignItems: 'center'}}>
          The OTP only work in 60s left, can't see your OTP?
        </Text>
        <Button
          wrapperStyle={{alignSelf: 'center'}}
          type={'basic'}
          size={'sm'}
          label={'Resend'}
        />
      </View>
    
    </View>
  );
};
const styles = StyleSheet.create({
  containInput: {
    width: '100%',
    alignSelf: 'center',
  },
  noti: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  }
});
export {ConfirmOtpForm};
