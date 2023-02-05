import {View, TouchableOpacity, StyleSheet, Image} from "react-native"
import {Colors} from "../../assets/colors"
import {TextField, SecureTextField, Button, CsText} from "../../components"

function Login()
{
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
        <TextField wrapperStyle={{width: "100%", marginBottom: 15}} placeholder="email or username"/>   
        <SecureTextField wrapperStyle={{width: "100%", marginBottom: 15}} placeholder="password"/> 
        <Button wrapperStyle={{width: '100%', marginBottom: 20}} label="Sign In"/>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <CsText>forgot your password?</CsText>
        </TouchableOpacity>
        <Button wrapperStyle={{alignSelf: 'center', marginTop: 80}} type={'secondary'} size={'sm'} label={'create new account'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    // maxWidth: 'auto',
    // height: '40%',
    maxHeight: 'auto',
    marginBottom: 50,
  }
})
export {Login}