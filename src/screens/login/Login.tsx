import { useNavigation } from "@react-navigation/native"
import {View, TouchableOpacity, StyleSheet, Image} from "react-native"
import {Colors} from "../../assets/colors"
import {TextField, SecureTextField, Button, CsText} from "../../components"
import {useState} from "react"
import { InputStateType } from '../../@types/InputStateType';
import { inputInitState } from '../../constant/inputInitState';
import { API_AUTH } from '../../constant/api';
import axios from "axios"

function Login()
{
  const nav = useNavigation<any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<InputStateType>(inputInitState)
  const [password, setPassword] = useState<InputStateType>(inputInitState)

  function submmit()
  {
    const data = {
      email: username.value,
      password: password.value
    }
    setIsLoading(true)
    axios.post(API_AUTH, data)
    .then((res) => {
      setIsLoading(false)
      nav.replace("HomeScreen")
      console.log(res.data)
    })
    .catch((error) => {
      setIsLoading(false)
      console.error(error)
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

        <TextField onChangeText={(text: string) => {
          setUsername({value: text, error: ''})
        }} wrapperStyle={{width: "100%", marginBottom: 15}} placeholder="username"/>

        <SecureTextField onChangeText={(text) => {
          setPassword({value: text, error: ''})
        }} wrapperStyle={{width: "100%", marginBottom: 15}} placeholder="password"/>

        <Button onPress={submmit} isLoading={isLoading} wrapperStyle={{width: '100%', marginBottom: 20}} label="Sign In"/>

        <TouchableOpacity style={{alignSelf: 'center'}}>
          <CsText>forgot your password?</CsText>
        </TouchableOpacity>

        <Button onPress={() => nav.navigate("RegisterScreen")} wrapperStyle={{alignSelf: 'center', marginTop: 80}} type={'secondary'} size={'sm'} label={'create new account'} />
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