import {StyleSheet, View} from 'react-native'
import {Avatar, Button, CsText, Hi} from '../../components'
import {Colors} from '../../assets/colors'
import { useEffect, useState } from 'react';
import RekomAxios from '../../api/axios';
import {HeaderBack} from '../../components'

interface CsOtherProfileProps
{
   username: string,
   avatarUrl: string,
   fullName: string,
   description: string,
   amountReview: number,
   amountFollower: number,
   amountFollowing: number,
   isFollow?: boolean
}
const CsOtherProfile = (props: CsOtherProfileProps) => {
   const [followStatus, setFollowStatus] = useState<boolean | undefined>(props.isFollow)
   const [amountFollower, setAmountFollower] = useState(props.amountFollower)

   useEffect(() => {
      setFollowStatus(props.isFollow)
   }, [props.isFollow])
   
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
         url: `rekomers/52519880-367c-4fc6-a5e7-bd91fdc7e331/${url}`,
         method
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
         <HeaderBack type={'secondary'} title={props.username}
                     wrapperStyle={{ paddingHorizontal: 20, marginBottom: 20}}/>
         <View>
            <Avatar
               imgUrl={props.avatarUrl}
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
         <CsText style={{alignSelf: 'center', marginBottom: 5}} size={'lg'} weight={'800'}>{props.fullName ? props.fullName : 'nhô nhem'}</CsText>
         <CsText style={{
            alignSelf: 'center',
            marginBottom: 10,
            textAlign: 'center'
         }}>{props.description}</CsText>
         <View style={{flexDirection: 'row'}}>
            <Hi number={props.amountReview} label='Reviews'/>
            <Hi number={amountFollower} label='Followers'/>
            <Hi number={props.amountFollowing} label='Following'/>
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