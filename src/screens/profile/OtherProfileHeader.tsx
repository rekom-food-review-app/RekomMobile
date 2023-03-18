import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {Avatar, Button, CsText, Hi} from '../../components'
import {Colors} from '../../assets/colors'
import { useEffect, useState } from 'react';
import RekomAxios from '../../api/axios';
import {HeaderBack} from '../../components'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { updateAmountFollowing } from '../../global-states';
import { RekomerProfileApiType } from '../../@types/RekomerProfileApiType';
import { rekomerProfileApiInitState } from '../../constant/rekomerProfileApiInitState';
import { RootState } from '../../app/store';

interface OtherProfileHeaderProps
{
   rekomerId: string
}

const OtherProfileHeader = (props: OtherProfileHeaderProps) =>
{
   const [rekomerProfile, setRekomerProfile] = useState<RekomerProfileApiType>(rekomerProfileApiInitState)

   const meId = useSelector((state: RootState) => state.auth.profile.id)

   const [isFollowButtonDisplay, setIsFollowButtonDisplay] = useState<boolean>(!(props.rekomerId == meId))
   const [followStatus, setFollowStatus] = useState<boolean | undefined>(false)
   const [amountFollower, setAmountFollower] = useState(rekomerProfile.amountFollower)

   const nav = useNavigation<any>()
   const dispatch = useDispatch()
   
   useEffect(() => {
      setAmountFollower(rekomerProfile.amountFollower)
   }, [rekomerProfile.amountFollower])

   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: `/rekomers/${props.rekomerId}/profile`,
         responseType: 'json'
      })
      .then(res => {
         setRekomerProfile(res.data.rekomer)
      })
      .catch(e => {
         console.log(e)
      })
   },[])

   useEffect(() => {
      setFollowStatus(rekomerProfile.isFollow)
   }, [rekomerProfile.isFollow])
   
   const changeFollowStatus = () => {
      let url = "follow"
      let method = "post"
      let num = 1

      if (followStatus) {
         url = "unfollow"
         method = "delete"
         num = -1
      }

      setFollowStatus(!followStatus)
      setAmountFollower(amountFollower + num)

      RekomAxios({
         url: `rekomers/${props.rekomerId}/${url}`,
         method
      })
      .then(res => {
         dispatch(updateAmountFollowing(num))
      })
      .catch((error) => {
         setAmountFollower((pre) => {
            return pre - num
         })
         setFollowStatus((pre) => !pre)
      })
   }

   return (
      <View style={defaultStyle.contain}>
         <HeaderBack type={'secondary'} title={rekomerProfile.username}
                     wrapperStyle={{ paddingHorizontal: 20, marginBottom: 20}}/>
         <View>
            <Avatar
               imgUrl={rekomerProfile.avatarUrl}
               wrapperStyle={{marginBottom: 20}} size={'xl'}/>
            <View style={{
               backgroundColor: Colors.B,
               position: 'absolute',
               bottom: 20,
               right: -15,
               padding: 5,
               borderRadius: 100
            }}>
               {
                  isFollowButtonDisplay
                  ? <Button 
                     onPress={() => changeFollowStatus()}
                     size={'xs'} 
                     type={'primary'} 
                     label={followStatus ? 'following' : 'follow'} />
                  : null
               }
            </View>
         </View>
         <CsText style={{alignSelf: 'center', marginBottom: 5}} size={'lg'} weight={'800'}>{rekomerProfile.fullName}</CsText>
         <CsText style={{
            alignSelf: 'center',
            marginBottom: 10,
            textAlign: 'center'
         }}>{rekomerProfile.description}</CsText>
         <View style={{flexDirection: 'row'}}>
            <Hi number={rekomerProfile.amountReview} label='Reviews'/>
            <TouchableOpacity onPress={() => {nav.push('Follow', {id: rekomerProfile.id, route: "followers"})}}><Hi number={amountFollower} label='Followers'/></TouchableOpacity>
            <TouchableOpacity onPress={() => {nav.push('Follow', {id: rekomerProfile.id, route: "followings"})}}><Hi number={rekomerProfile.amountFollowing} label='Following'/></TouchableOpacity>
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

export {OtherProfileHeader}