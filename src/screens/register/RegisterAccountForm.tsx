import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/colors';
import {Button, CsText, SecureTextField, TextField} from '../../components';
import {setTab} from "../../global-states"
import {useDispatch, useSelector} from 'react-redux'
import {InputStateType} from '../../@types/InputStateType';
import {inputInitState} from '../../constant/inputInitState';
import {RootState} from "../../app/store";
import RekomAxios from '../../api/axios';
import { setAuth } from '../../global-states';

interface RegisterAccountFormProps {
   onSubmit?: () => void
}

function RegisterAccountForm(props: RegisterAccountFormProps) {
   const [userNameInput, setUserNameInput] = useState<InputStateType>(inputInitState)
   const [emailInput, setEmailInput] = useState<InputStateType>(inputInitState)
   const [passwordInput, setPasswordInput] = useState<InputStateType>(inputInitState)
   const auth = useSelector((state: RootState) => state.auth)
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const dispatch = useDispatch()

   const submit = async () => {
      setIsLoading(true)
      let data = {
         "username": userNameInput.value,
         "email": emailInput.value,
         "password": passwordInput.value,
         "role": "Rekomer"
      }
      // dispatch(setTab(2))
      RekomAxios({
         url: 'register/email',
         method: 'post',
         data
      })        
      .then((res) => {
          dispatch(setTab(2))
          dispatch(setAuth({authToken: res.data.authToken})) // bug here
        })
      .catch((e) => {
         setIsLoading(false)
         console.log(e)
         const status: number = e.response.data.status;
         const errors = e.response.data.errors
         if (status == 400) {
            setUserNameInput({...userNameInput, error: errors["Username"] || ''})
            setEmailInput({...emailInput, error: errors["Email"] || ''})
            setPasswordInput({...passwordInput, error: errors["Password"] || ''})
         }
      });

   };

   return (
      <View style={styles.containInput}>
         <Text style={{textAlign: 'center', marginBottom: 10}}>
            Let's create a new account
         </Text>

         <TextField
            error={userNameInput.error}
            wrapperStyle={{width: '100%'}}
            type={'left'}
            size={'lg'}
            placeholder="Username"
            onChangeText={(userName: string) => {
               setUserNameInput({
                  value: userName,
                  error: ''
               })
            }}
         />

         <TextField
            error={emailInput.error}
            wrapperStyle={{width: '100%'}}
            type={'left'}
            size={'lg'}
            placeholder="Email"
            onChangeText={(email: string) => {
               setEmailInput({
                  value: email,
                  error: ''
               })
            }}
         />

         <SecureTextField
            error={passwordInput.error}
            wrapperStyle={{width: '100%'}}
            type={'left'}
            size={'lg'}
            placeholder="Password"
            onChangeText={(password: string) => {
               setPasswordInput({
                  value: password,
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
            label={'Next'}
         />

         <View style={{
            position: 'absolute',
            bottom: '50%',
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5
         }}>
            <View style={styles.dot}></View>
            <CsText size='xs'>I agree with <Text style={{textDecorationLine: "underline", fontWeight: "bold"}}>user
               agreement</Text></CsText>
         </View>

      </View>
   );
}

const styles = StyleSheet.create({
   containInput: {
      width: '100%',
      minHeight: '100%',
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

