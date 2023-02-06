import { View } from "react-native";
import {ConfirmOtpForm, RegisterAccountForm, UpdateProfileForm} from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootStack} from "../App"

const Stack = createNativeStackNavigator();

function RegisterNavigator()
{
  return (
    <RootStack.Navigator initialRouteName="RegisterNewAccount">    
      <RootStack.Screen options={{headerShown: false}} name="RegisterNewAccount" component={RegisterAccountForm}/>
      <RootStack.Screen options={{headerShown: false}} name="RegisterOTP" component={ConfirmOtpForm}/>
      <RootStack.Screen options={{headerShown: false}} name="RegisterUpdateProfile" component={UpdateProfileForm}/>
    </RootStack.Navigator>
  )
}

export {RegisterNavigator as RegisterNav}