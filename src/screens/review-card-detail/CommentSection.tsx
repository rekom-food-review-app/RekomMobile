import { useEffect, useState } from 'react'
import {FlatList, View} from 'react-native'
import RekomAxios from '../../api/axios'
import { Colors } from '../../assets/colors'
import { UserActionInfo } from '../../components'

interface CommentSectionProps 
{
  commentList: any[]
  handleEndReached: () => void
}

const CommentSection = (props: CommentSectionProps) => {
  return(
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
        onEndReached={props.handleEndReached}
        onEndReachedThreshold={0.01}
      />
    // </View>
  )
}
export {CommentSection}