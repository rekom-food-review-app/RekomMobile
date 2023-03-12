import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {Avatar, CsText, Hi} from '../../components'
import {Colors} from '../../assets/colors'
import {HeaderBack} from "../../components"
import { useNavigation } from '@react-navigation/native'
import RekomAxios from '../../api/axios'
import { useState } from 'react'

interface CsMyProfileProps
{
   username: string,
   avatarUrl: string,
   fullName: string,
   description: string,
   amountReview: number,
   amountFollower: number,
   amountFollowing: number,
}
const CsMyProfile = (props: CsMyProfileProps) =>
{  
   const nav = useNavigation<any>()
   const [follower, setFollower] = useState([])
   const [following, setFollowing] = useState([])
   const getFollowers = () => {
      RekomAxios({
         method: 'get',
         url: `rekomers/me/followers?page=1&size=5`
      })
      .then(res => {
         setFollower(res.data.followerList)
      })
      .catch(e => {
         console.log(e)
      })
   }
   const getFollowings = () => {
      RekomAxios({
         method: 'get',
         url: `rekomers/me/followings?page=1&size=5`
      })
      .then(res => {
         setFollowing(res.data.followingList)
      })
      .catch(e => {
         console.log(e)
      })
   }
   return (
      <View style={defaultStyle.contain}>
         <HeaderBack type={'secondary'} title={props.username}
            wrapperStyle={{ paddingHorizontal: 20, marginBottom: 20}}/>
         <Avatar
            imgUrl={`${props.avatarUrl}`} 
            wrapperStyle={{marginBottom: 20}} size={'lg'}/>

         <CsText
            style={{alignSelf: 'center', marginBottom: 5}}
            size={'lg'} weight={'800'}>
            {props.fullName}
         </CsText>

         <CsText
            style={{alignSelf: 'center', marginBottom: 10, textAlign: 'center'}}>
            {props.description}</CsText>
         <View style={{flexDirection: 'row'}}>
            <Hi number={props.amountReview} label='Reviews'/>
            <TouchableOpacity onPress={() => {getFollowers; nav.push('Follow', follower)}}><Hi number={props.amountFollower} label='Followers'/></TouchableOpacity>
            <TouchableOpacity onPress={() => {getFollowings; nav.push('Follow', following)}}><Hi number={props.amountFollowing} label='Following'/></TouchableOpacity>
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
export {CsMyProfile}