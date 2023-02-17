import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextField} from '../../components';
import { InputStateType } from '../../@types/InputStateType';
import { inputInitState } from '../../constant/inputInitState';
import axios from 'axios';
import { API_URL_OTP } from '../../constant/api';
import { useDispatch, useSelector } from 'react-redux';
import { setTab } from '../../global-states';
import { RootState } from '../../app/store';

interface ConfirmOtpFormProps
{
  onSubmit?: () => void
}

const ConfirmOtpForm = (props: ConfirmOtpFormProps) => {
  const [otpInput, setOtpInput] = useState<InputStateType>(inputInitState)
  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const submit = async () => {
    let data = {
      "otp": otpInput.value
    }
    let config = {
      headers: {
        Authorization: `bearer ${auth.authToken.accessToken}`
      }
    }
    dispatch(setTab(3))
    // axios.post(API_URL_OTP, data, config).
    //   then((res) => {
    //     console.log(res.data)
    //     dispatch(setTab(3))
    //   }).catch((error) => {
    //     console.log(error)
    //   })
  }
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
          onChangeText={(otp: string) => {
            setOtpInput({
              value: otp,
              error: ''
            })
          }}
        />
        <Button
          onPress={submit}
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
