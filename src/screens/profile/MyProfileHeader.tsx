import {Button, StyleSheet, TouchableOpacity, View} from 'react-native'
import {Avatar, CsText, Hi} from '../../components'
import {Colors} from '../../assets/colors'
import {HeaderBack} from "../../components"
import { useNavigation } from '@react-navigation/native'
import RekomAxios from '../../api/axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { setMyProfile } from '../../global-states'
import { MyProfileMenu } from './MyProfileMenu'

interface MyProfileHeaderProps
{
   
}

const MyProfileHeader = (props: MyProfileHeaderProps) =>
{  
   const nav = useNavigation<any>()
   const dispatch = useDispatch()
   const myProfile = useSelector((state: RootState) => state.myProfile.myProfile)

   // const [isModalVisible, setModalVisible] = useState(false);

   const [modalVisible, setModalVisible] = useState<boolean>(false);

   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: '/rekomers/me/profile',
      })
      .then(res => {
         dispatch(setMyProfile({myProfile: res.data.rekomer}))
      })
      .catch(e => {
         console.error(e)
      })
   },[])
   
   return (
      <View style={defaultStyle.contain}>

         <MyProfileMenu modalVisible={modalVisible} setModalVisible={setModalVisible}/>

         <HeaderBack onPressExtend={() => setModalVisible(true)} type={'secondary'} title={myProfile.username}
            wrapperStyle={{ paddingHorizontal: 20, marginBottom: 20}}/>
         <Avatar
            imgUrl={`${myProfile.avatarUrl}`} 
            wrapperStyle={{marginBottom: 20}} size={'lg'}/>

         <CsText
            style={{alignSelf: 'center', marginBottom: 5}}
            size={'lg'} weight={'800'}>
            {myProfile.fullName}
         </CsText>

         <CsText
            style={{alignSelf: 'center', marginBottom: 10, textAlign: 'center'}}>
            {myProfile.description}</CsText>
         <View style={{flexDirection: 'row'}}>
            <Hi number={myProfile.amountReview} label='Reviews'/>
            <TouchableOpacity onPress={() => {nav.push('Follow', {id: "me", route: "followers"})}}><Hi number={myProfile.amountFollower} label='Followers'/></TouchableOpacity>
            <TouchableOpacity onPress={() => {nav.push('Follow', {id: "me", route: "followings"})}}><Hi number={myProfile.amountFollowing} label='Following'/></TouchableOpacity>
         </View>

         <View style={defaultStyle.dashedLine}></View>
      </View>
   )
}
const defaultStyle = StyleSheet.create({
   contain: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
   },
   dashedLine: {
      borderBottomColor: Colors.C,
      borderStyle: 'dashed',
      borderBottomWidth: 1,
      width: '90%',
      alignSelf: 'center',
      marginVertical: 10,
      marginBottom: 30,
      marginTop: 40
   }
})
export {MyProfileHeader}