import {StyleSheet, View} from 'react-native'
import {Avatar, CsText, Hi} from '../../components'
import {Colors} from '../../assets/colors'
import {HeaderBack} from "../../components"
import { useEffect, useState } from 'react'
import RekomAxios from '../../api/axios'
import { RekomerProfileApiType } from '../../@types/OtherProfileApiType'
import { rekomerProfileApiInitState } from '../../constant/otherProfileApiInitState'
import { imageUrlBase } from '../../constant/imageUrlBase'

const CsMyProfile = () =>
{
   const [rekomer, setRekomer] = useState<RekomerProfileApiType>(rekomerProfileApiInitState)
   
   useEffect(() => {
      RekomAxios({
         method: 'get',
         url: '/rekomers/cdada5a4-c2ac-40c6-9151-39147f09c830/profile',
         responseType: 'json'
      })
      .then(res => {
         console.log(res.data)
         let data = res.data.rekomer
         setRekomer(data)
      })
      .catch(e => {
         console.log(e)
      })
   },[])

   return (
      <View style={defaultStyle.contain}>
         <HeaderBack type={'secondary'} title={rekomer.username}
            wrapperStyle={{ paddingHorizontal: 20, marginBottom: 20}}/>
         <Avatar
            imgUrl={`${imageUrlBase}/${rekomer.avatarUrl}`} 
            wrapperStyle={{marginBottom: 20}} size={'lg'}/>

         <CsText
            style={{alignSelf: 'center', marginBottom: 5}}
            size={'lg'} weight={'800'}>
            Pham Le Thanh Vu
         </CsText>

         <CsText
            style={{alignSelf: 'center', marginBottom: 10, textAlign: 'center'}}>
            {rekomer.description}</CsText>
         <View style={{flexDirection: 'row'}}>
            <Hi number={rekomer.amountReview} label='Reviews'/>
            <Hi number={rekomer.amountFollower} label='Followers'/>
            <Hi number={rekomer.amountFollowing} label='Following'/>
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