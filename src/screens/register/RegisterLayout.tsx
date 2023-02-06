import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/colors';
import {TimeLine, CsText} from '../../components';
import {ConfirmOtpForm, RegisterAccountForm, UpdateProfileForm} from "./index"

function RegisterLayout() 
{
  const nav = useNavigation()
  const [tab, setTab] = useState<number>(1);

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: Colors.B}}>

      <View style={styles.layout}>

        <View style={{marginBottom: 30}}>
          <Image style={styles.logo} source={require('../../assets/image/thelogo.png')}/>
          <Text style={styles.title}>Be A "Rekomer" Right Now!</Text>
          <CsText style={{marginBottom: 30}}>Step 1/3</CsText>
          <TimeLine />
        </View>

        {
          tab == 1 ? <RegisterAccountForm onSubmit={() => {setTab(2)}}/> : null
        }
        {
          tab == 2 ? <ConfirmOtpForm onSubmit={() => {setTab(3)}}/> : null
        }
        {
          tab == 3 ? <UpdateProfileForm onSubmit={() => {nav.navigate("Intro")}}/> : null
        }

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
  },
  logo: {
    width: 170,
    height: 70,
    marginLeft: -15,
    marginVertical: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  containInput: {
    width: '100%',
    alignSelf: 'center',
    gap: 20,
  },
});

export {RegisterLayout};
