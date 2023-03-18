import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextField} from '../../components';
import {InputStateType} from '../../@types/InputStateType';
import {inputInitState} from '../../constant/inputInitState';
import {useDispatch, useSelector} from 'react-redux';
import {setTab} from '../../global-states';
import {RootState} from '../../app/store';
import RekomAxios from '../../api/axios';

interface ConfirmOtpFormProps {
   onSubmit?: () => void
}

const ConfirmOtpForm = (props: ConfirmOtpFormProps) => {
   const [otpInput, setOtpInput] = useState<InputStateType>(inputInitState)
   const auth = useSelector((state: RootState) => state.auth)
   const dispatch = useDispatch()
   const [countdown, setCountdown] = useState(60);
   const [isLoading, setIsLoading] = useState<boolean>(false)

   useEffect(() => {
      const interval = setInterval(() => {
         setCountdown((prevCountdown) => {
            if (prevCountdown === 0) {
            clearInterval(interval);
            return prevCountdown;
            }
            return prevCountdown - 1;
         });
      }, 1000);
      return () => clearInterval(interval);
   }, []);

   const handleResetCountdown = () => {
      setCountdown(60);
   }

   const submit = async () => {
      setIsLoading(true);

      let data = {
         "otpCode": otpInput.value
      }

      // let config = {
      //    headers: {
      //       Authorization: `bearer ${auth.authToken.accessToken}`
      //    }
      // }
      RekomAxios({
         method: 'post',
         data: data,
         url: 'account/confirm'
      })
      .then((res) => {
         console.log(res.data)
         dispatch(setTab(3))
      })
      .catch((error) => {
         setIsLoading(false);
         console.log(error)
      })
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
               isLoading={isLoading}
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
               The OTP only work in {countdown}s left, can't see your OTP?
            </Text>
            <Button
               wrapperStyle={{alignSelf: 'center'}}
               type={'basic'}
               size={'sm'}
               label={'Resend'}
               onPress={handleResetCountdown}
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
