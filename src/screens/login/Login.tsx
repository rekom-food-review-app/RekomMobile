import {useNavigation} from "@react-navigation/native"
import {Image, StyleSheet, TouchableOpacity, View} from "react-native"
import {Colors} from "../../assets/colors"
import {Button, CsText, SecureTextField, TextField} from "../../components"
import {useState} from "react"
import {InputStateType} from '../../@types/InputStateType';
import {inputInitState} from '../../constant/inputInitState';
import {useDispatch} from 'react-redux'
import {setAuth} from "../../global-states"
import RekomAxios from "../../api/axios"

function Login() {
   const nav = useNavigation<any>()
   const dispatch = useDispatch()
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [email, setEmail] = useState<InputStateType>(inputInitState)
   const [password, setPassword] = useState<InputStateType>(inputInitState)

   function submit() {
      // nav.replace("RestaurantScreen")
      setIsLoading(true)

      console.log(email.value, password.value)

      RekomAxios({
         method: 'post',
         url: '/auth/email',
         data: {
            email: email.value,
            password: password.value
         }
      })
         .then(res => {
            dispatch(setAuth({authToken: res.data.authToken}))
            setIsLoading(false)
            nav.navigate("RestaurantScreen")
         })
         .catch(e => {
            console.log(e)
            setIsLoading(false)
            setEmail(pre => ({value: email.value, error: "incorrect email or password"}))
            setPassword(pre => ({value: password.value, error: "incorrect email or password"}))
         })
   }

   return (
      <View style={{width: '100%', height: '100%', backgroundColor: Colors.B}}>
         <Image source={require('../../assets/image/Header.png')} style={styles.header}/>
         <View
            style={{
               paddingHorizontal: 10,
               width: '90%',
               alignSelf: 'center',
               justifyContent: 'center'
            }}>

            <TextField
               error={email.error}
               onChangeText={(text: string) => setEmail({value: text, error: ''})}
               wrapperStyle={{width: "100%", marginBottom: 15}} placeholder="email"/>

            <SecureTextField
               error={password.error}
               onChangeText={(text) => setPassword({value: text, error: ''})}
               wrapperStyle={{width: "100%", marginBottom: 15}} placeholder="password"/>

            <Button onPress={submit} isLoading={isLoading} wrapperStyle={{width: '100%', marginBottom: 20}}
                    label="Sign In"/>

            <TouchableOpacity style={{alignSelf: 'center'}}>
               <CsText>forgot your password?</CsText>
            </TouchableOpacity>

            <Button onPress={() => nav.navigate("RegisterScreen")} wrapperStyle={{alignSelf: 'center', marginTop: 80}}
                    type={'secondary'} size={'sm'} label={'create new account'}/>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   header: {
      width: '100%',
      height: 253,
      marginBottom: 50,
   }
})
export {Login}