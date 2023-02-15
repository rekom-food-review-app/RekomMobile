import {View} from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { Colors } from '../../assets/colors'
import { Button, ReviewCard, TextField, UserActionInfo } from '../../components'

const Comment = () => {
  return(
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <ScrollView>
        <View style={{gap: 10, marginBottom: 100}}>
          <UserActionInfo avtSize={'xs'} wrapperStyle={{gap: 10, padding: 10, borderWidth: 1, borderColor: Colors.C, borderRadius: 20}} text={'Mot con vit xoe ra 2 con thang lang con dua nhau can nhau dut con chim non tren canh cay hot lieu lo hot lieu lo'}/>
          <UserActionInfo avtSize={'xs'} wrapperStyle={{gap: 10, padding: 10, borderWidth: 1, borderColor: Colors.C, borderRadius: 20}} text={'Mot con vit xoe ra 2 con thang lang con dua nhau can nhau dut con chim non tren canh cay hot lieu lo hot lieu lo'}/>
          <UserActionInfo avtSize={'xs'} wrapperStyle={{gap: 10, padding: 10, borderWidth: 1, borderColor: Colors.C, borderRadius: 20}} text={'Mot con vit xoe ra 2 con thang lang con dua nhau can nhau dut con chim non tren canh cay hot lieu lo hot lieu lo'}/>
          <UserActionInfo avtSize={'xs'} wrapperStyle={{gap: 10, padding: 10, borderWidth: 1, borderColor: Colors.C, borderRadius: 20}} text={'Mot con vit xoe ra 2 con thang lang con dua nhau can nhau dut con chim non tren canh cay hot lieu lo hot lieu lo'}/>
        </View>
    </ScrollView>
      <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, backgroundColor: Colors.B, right: 0, left:0, paddingVertical: 10 }}>
        <TextField placeholder={'Reply to this review'} size={'md'}/>
        <Button label={'Send'} type={'secondary'} size={'xs'} wrapperStyle={{alignSelf: 'center'}}/>
      </View>
    </View>
  )
}
export {Comment}