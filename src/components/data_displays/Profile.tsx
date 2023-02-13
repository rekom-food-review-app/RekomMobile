import {Image, View, StyleSheet} from 'react-native'
import { Avatar } from './Avatar'
import { CsText } from './CsText'
import { Colors } from '../../assets/colors'
import { Hi } from './Hi'
const Profile = () => {
  return(
    <View style={defaultStyle.contain}>
      <Avatar wrapperStyle={{marginBottom: 20}} size={'lg'}/>
      <CsText style={{alignSelf: 'center', marginBottom: 5}} size={'lg'} weight={'800'}>{'Pham Le Thanh Vu'}</CsText>
      <CsText style={{alignSelf: 'center', marginBottom: 10, textAlign: 'center'}} >{'Nguoi dan ba co cay ca lem si cu la'}</CsText>
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
    marginTop: 20
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
export {Profile}