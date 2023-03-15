import {FlatList, Text, View} from 'react-native'
import { HeaderBack, UserActionInfo } from '../../components'
import { Colors } from '../../assets/colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import RekomAxios from '../../api/axios'

const Follow = () => {
  const route = useRoute()
  const nav = useNavigation<any>()

  const [followList, setFollowLList] = useState()

  useEffect(() => {
    getFollow()
  }, [])

  const getFollow = () => {
    RekomAxios({
       method: 'get',
       url: `rekomers/${(route.params as any).id}/${(route.params as any).route}?page=1&size=5`
    })
    .then(res => {
      setFollowLList(res.data.followList)
    })
    .catch(e => {
       console.log(e)
    })
 }

  return(
    <View style={{paddingHorizontal: 20, paddingTop: 30}}>
      <HeaderBack title='Vu&apos;s Followers' type='secondary'wrapperStyle={{marginBottom: 20}}/>
      {(followList) ? <FlatList 
        data={followList}
        renderItem = {({item}) => 
          <UserActionInfo 
            wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
            avatarUrl={item.rekomerAvatarUrl} 
            fullName={item.rekomerFullName}
            id={item.id}
            onPressUser={() => nav.push('OtherProfileScreen', item.rekomerId)}
          />}
        keyExtractor={(item, index) => item.id}
        // onEndReached={props.handleEndReached}
        onEndReachedThreshold={0.01}
      /> : <Text style={{textAlign: 'center'}}>Nothing</Text>}

    </View>
  )
}
export {Follow}