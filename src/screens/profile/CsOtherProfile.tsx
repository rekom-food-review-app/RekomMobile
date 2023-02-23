import {StyleSheet, View} from 'react-native'
import {Avatar, Button, CsText, Hi} from '../../components'
import {Colors} from '../../assets/colors'
import { useEffect, useState } from 'react';
import { OtherProfileApiType } from '../../@types/OtherProfileApiType';
import { otherProfileApiInitState } from '../../constant/otherProfileApiInitState';
import RekomAxios from '../../api/axios';
import {HeaderBack} from '../../components'

const CsOtherProfile = () => {
   const [data, setData] = useState<OtherProfileApiType>(otherProfileApiInitState)
   const [isFollowing, setIsFollowing] = useState(false);
   const [followStatus, setFollowStatus] = useState<boolean>(data.isFollowed)

   useEffect(() => {
      setFollowStatus(data.isFollowed)
   }, [data.isFollowed])
   
   const changeFollowStatus = () => {
      let url = "follow"
      let method = "post"

      if (followStatus) {
         url = "unfollow"
         method = "delete"
      }

      setFollowStatus(!followStatus)

      RekomAxios({
         url: `rekomers/cdada5a4-c2ac-40c6-9151-39147f09c830/${url}`,
         method
      })
      .catch((error) => {
         setFollowStatus((pre) => !pre)
      })
   }

   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: '/rekomers/cdada5a4-c2ac-40c6-9151-39147f09c830/profile',
         responseType: 'json'
      })
      .then(res => {
         let data = res.data.otherProfile
         console.log(data)
         setData(data)
      })
      .catch(e => {
         console.log(e)
      })
   },[])

   return (
      <View style={defaultStyle.contain}>
         <HeaderBack type={'secondary'} title={data.username}
                        wrapperStyle={{ paddingHorizontal: 20, marginBottom: 20}}/>
         <View>
            <Avatar
               imgUrl={data.avatarUrl}
               wrapperStyle={{marginBottom: 20}} size={'lg'}/>
            <View style={{
               backgroundColor: Colors.B,
               position: 'absolute',
               bottom: 20,
               right: -15,
               padding: 5,
               borderRadius: 100
            }}>
               <Button 
               onPress={() => changeFollowStatus()}
               size={'xs'} 
               type={'primary'} 
               label={followStatus ? 'following' : 'follow'} />
            </View>
         </View>
         <CsText style={{alignSelf: 'center', marginBottom: 5}} size={'lg'} weight={'800'}>{data.fullName ? data.fullName : 'nhô nhem'}</CsText>
         <CsText style={{
            alignSelf: 'center',
            marginBottom: 10,
            textAlign: 'center'
         }}>{data.description}</CsText>
         <View style={{flexDirection: 'row'}}>
            <Hi number={data.totalReviews} label='Reviews'/>
            <Hi number={data.totalFollowers} label='Followers'/>
            <Hi number={data.totalFollowings} label='Following'/>
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

export {CsOtherProfile}