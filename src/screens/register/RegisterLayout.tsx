
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../assets/colors';
import {TimeLine, CsText} from '../../components';
import {ConfirmOtpForm, RegisterAccountForm, UpdateProfileForm} from "./index"
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "../../app/store"
import { useEffect } from 'react';
import { setTab } from '../../global-states';

function RegisterLayout()   
{
  const tab = useSelector((state: RootState) => state.registerTab.tab)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(setTab(1))
    }
  }, [])

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: Colors.B}}>

      <View style={styles.layout}>

        <View style={{marginBottom: 30}}>
          <Image style={styles.logo} source={require('../../assets/image/thelogo.png')}/>
          <Text style={styles.title}>Be A "Rekomer" Right Now!</Text>
          <CsText style={{marginBottom: 30}}>Step 1/3</CsText>
          <TimeLine  step={tab}/>
        </View>

        {
          tab == 1 ? <RegisterAccountForm/> : null
        }
        {
          tab == 2 ? <ConfirmOtpForm/> : null
        }
        {
          tab == 3 ? <UpdateProfileForm /> : null
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
