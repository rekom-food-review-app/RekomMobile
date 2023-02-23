import {StyleSheet, View} from 'react-native'
import {Avatar, CsText, Hi} from '../../components'
import {Colors} from '../../assets/colors'
import {HeaderBack} from "../../components"

const CsMyProfile = () =>
{
   return (
      <View style={defaultStyle.contain}>
         <HeaderBack type={'secondary'} title={'@traialime'}
                        wrapperStyle={{ paddingHorizontal: 20, marginBottom: 20}}/>
         <Avatar
            imgUrl={"https://i.pinimg.com/736x/b1/cb/da/b1cbda6365c638531a79da3a7264c259.jpg"}
            wrapperStyle={{marginBottom: 20}} size={'lg'}/>

         <CsText
            style={{alignSelf: 'center', marginBottom: 5}}
            size={'lg'} weight={'800'}>
            Pham Le Thanh Vu
         </CsText>

         <CsText
            style={{alignSelf: 'center', marginBottom: 10, textAlign: 'center'}}>
            dan ba co cay ca lem si cu la
         </CsText>

         <View style={{flexDirection: 'row'}}>
            <Hi number={110000} label='Reviews'/>
            <Hi number={1} label='Followers'/>
            <Hi number={1} label='Following'/>
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