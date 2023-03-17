import { useEffect } from 'react'
import {Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { setProfile } from '../../global-states';
import { useDispatch } from 'react-redux';

const Loading = () => {
  const nav = useNavigation<any>()
  const dispatch = useDispatch()

  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((accessToken) => {
        setTimeout(() => {
          if (accessToken) {

            AsyncStorage.getItem("profile")
              .then((profileString) => {
                dispatch(setProfile(JSON.parse(profileString || '')))
                nav.replace("BottomTabs")
              })
          } else {
            nav.replace("LoginScreen")
          }
        }, 400)
      })
  }, [])

  return(
    <Image source={require('../../assets/image/LoadingScreen.png')} style={{width: '100%', height: '100%'}}/>
  )
}
export {Loading}