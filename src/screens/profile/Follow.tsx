import {FlatList, Text, View} from 'react-native'
import { HeaderBack, UserActionInfo } from '../../components'
import { Colors } from '../../assets/colors'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'

const Follow = () => {
  const route = useRoute<any>()
  const [follow, setFollow] = useState(route.params)
  console.log(follow)
  return(
    <View style={{paddingHorizontal: 20, paddingTop: 30}}>
      <HeaderBack title='Vu&apos;s Followers' type='secondary'wrapperStyle={{marginBottom: 20}}/>
      {(follow) ? <FlatList 
        data={follow}
        renderItem = {({item}) => 
          <UserActionInfo 
            wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
            avatarUrl={item.avatarUrl} 
            fullName={item.fullName}
            id={item.id}
          />}
        keyExtractor={(item, index) => item.key}
        // onEndReached={props.handleEndReached}
        onEndReachedThreshold={0.01}
      /> : <Text style={{textAlign: 'center'}}>Nothing</Text>}

    </View>
  )
}
export {Follow}