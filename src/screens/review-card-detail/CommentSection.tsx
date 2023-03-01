import { useEffect, useState } from 'react'
import {FlatList, View} from 'react-native'
import RekomAxios from '../../api/axios'
import { Colors } from '../../assets/colors'
import { UserActionInfo } from '../../components'

interface CommentSectionProps 
{
  commentList: any[]
}
const CommentSection = (props: CommentSectionProps) => {
  return(
    // <View style={{backgroundColor: 'white', width: '100%', height: '100%', marginBottom: 80}}>
      <FlatList 
        data={props.commentList}
        renderItem = {({item}) => 
          <UserActionInfo 
            key={item.id}
            id={item.id}
            avtSize={'xs'} 
            avatarUrl={item.rekomerAvatarUrl} 
            actionDate={"3 ngay truoc"}
            fullName={item.rekomerName}
            wrapperStyle={{gap: 10, padding: 10, borderWidth: 0.5, borderColor: Colors.C, borderRadius: 20, marginBottom: 10, borderStyle: 'dashed'}} 
            content={item.content}
          />}
        keyExtractor={(item, index) => item.key}
      />
    // </View>
  )
}
export {CommentSection}