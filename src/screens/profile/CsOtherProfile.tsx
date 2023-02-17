import {StyleSheet, View} from 'react-native'
import {Avatar, Button, CsText, Hi} from '../../components'
import {Colors} from '../../assets/colors'

const CsOtherProfile = () => {
   return (
      <View style={defaultStyle.contain}>
         <View>
            <Avatar
               imgUrl='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80 '
               wrapperStyle={{marginBottom: 20}} size={'lg'}/>
            <View style={{
               backgroundColor: Colors.B,
               position: 'absolute',
               bottom: 20,
               right: -15,
               padding: 5,
               borderRadius: 100
            }}>
               <Button size={'xs'} type={'primary'} label={'Follow'} wrapperStyle={{}}/>
            </View>
         </View>
         <CsText style={{alignSelf: 'center', marginBottom: 5}} size={'lg'} weight={'800'}>{'Pham Le Thanh Vu'}</CsText>
         <CsText style={{
            alignSelf: 'center',
            marginBottom: 10,
            textAlign: 'center'
         }}>{'Nguoi dan ba co cay ca lem si cu la'}</CsText>
         <View style={{flexDirection: 'row'}}>
            <Hi number='110000' label='Reviews'/>
            <Hi number='1M' label='Followers'/>
            <Hi number='1' label='Following'/>
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
      marginTop: 20,
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