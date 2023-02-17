import {View} from 'react-native'
import { Colors } from '../../assets/colors'
import { UserActionInfo } from '../../components'

const CommentSection = () => {

  return(
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <View style={{gap: 10, marginBottom: 75}}>
        <UserActionInfo avtSize={'xs'} 
          avatarUrl={"https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} 
          actionDate={"3 ngay truoc"}
          fullName={"vupham"}
          wrapperStyle={{gap: 10, padding: 10, borderWidth: 1, borderColor: Colors.C, borderRadius: 20}} 
          content={'Mot con vit xoe ra 2 con thang lang con dua nhau can nhau dut con chim non tren canh cay hot lieu lo hot lieu lo'}/>
      </View>
    </View>
  )
}
export {CommentSection}