import { useEffect } from 'react'
import {Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Loading = () => {
  const nav = useNavigation<any>()
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((accessToken) => {
        setTimeout(() => {
          if (accessToken) {
            nav.replace("BottomTabs")
          } else {
            nav.replace("LoginScreen")
          }
        }, 500)
      })
  }, [])

  return(
    <Image source={require('../../assets/image/LoadingScreen.png')} style={{width: '100%', height: '100%'}}/>
  )
}
export {Loading}