import {FlatList, View} from 'react-native'
import { HeaderBack, UserActionInfo } from '../../components'
import { Colors } from '../../assets/colors'

const Follow = () => {
  return(
    <View style={{paddingHorizontal: 20, paddingTop: 30}}>
      <HeaderBack title='Vu&apos;s Followers' type='secondary'wrapperStyle={{marginBottom: 20}}/>
      {/* <FlatList 
        data={props.commentList}
        renderItem = {({item}) => 
          <UserActionInfo 
            wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
            avatarUrl='https://images.unsplash.com/photo-1678203822791-6ae64ce46855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
            fullName='hi'
            actionDate='hi'
            createdAt='05/03/23, Sunday'
            id='' 
          />}
        keyExtractor={(item, index) => item.key}
        // onEndReached={props.handleEndReached}
        onEndReachedThreshold={0.01}
      /> */}
      <UserActionInfo 
        wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
        avatarUrl='https://images.unsplash.com/photo-1678203822791-6ae64ce46855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
        fullName='hi'
        createdAt='05/03/23, Sunday'
        id='' 
      />
      <UserActionInfo 
        wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
        avatarUrl='https://images.unsplash.com/photo-1678203822791-6ae64ce46855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
        fullName='hi'
        createdAt='05/03/23, Sunday'
        id='' 
      />
      <UserActionInfo 
        wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
        avatarUrl='https://images.unsplash.com/photo-1678203822791-6ae64ce46855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
        fullName='hi'
        createdAt='05/03/23, Sunday'
        id='' 
      />
      <UserActionInfo 
        wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
        avatarUrl='https://images.unsplash.com/photo-1678203822791-6ae64ce46855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
        fullName='hi'
        createdAt='05/03/23, Sunday'
        id='' 
      />
      <UserActionInfo 
        wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
        avatarUrl='https://images.unsplash.com/photo-1678203822791-6ae64ce46855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
        fullName='hi'
        createdAt='05/03/23, Sunday'
        id='' 
      />
      <UserActionInfo 
        wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
        avatarUrl='https://images.unsplash.com/photo-1678203822791-6ae64ce46855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
        fullName='hi'
        createdAt='05/03/23, Sunday'
        id='' 
      />
    </View>
  )
}
export {Follow}