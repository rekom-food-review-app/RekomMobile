import { useNavigation } from "@react-navigation/native"
import { View, Text, Image, StyleSheet } from "react-native"
import { Button } from "../../components"

function Intro()
{
  const nav = useNavigation<any>()

  return (
    <View>
      <Image source={require('../../assets/image/Intro.png')}
      style={styles.intro}/>
      <View style={{gap: 10}}>
        <Button onPress={() => nav.navigate('Register')} wrapperStyle={{width: '90%', alignSelf: 'center'}} type={'primary'} size={'md'} label={'Create New Account'}/>
        <Button onPress={() => nav.navigate('Login')} wrapperStyle={{width: '90%', alignSelf: 'center'}} type={'secondary'} size={'md'} label={'Sign in'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  intro: {
    width: '100%',
    height: '75%',
    marginBottom: 55,
  }
})
export {Intro}