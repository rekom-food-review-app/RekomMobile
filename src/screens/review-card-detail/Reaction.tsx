import { useEffect, useState } from 'react'
import { FlatList, View} from 'react-native'
import RekomAxios from '../../api/axios'
import { Colors } from '../../assets/colors'
import { UserActionInfo } from '../../components'

interface ReactionProps
{
  reviewId: string
  reactionId: string
}

const Reaction = (props: ReactionProps) => {
  const [reactionList, setReactionList] = useState<any[]>([])
  const [page, setPage] = useState(1);
  const size = 8

  useEffect(() => {
    RekomAxios({
      url: `reviews/${props.reviewId}/reactions/${props.reactionId}?page=${page}&size=${size}`
    })
    .then((res) => {
      setReactionList(pre => [...pre, ...res.data.reactionList])
    })
  }, [page])

  const handleEndReached = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return(
    <FlatList 
      data={reactionList}
      renderItem = {({item}) => 
        <UserActionInfo 
        id={item.rekomerId}
        avtSize={'xs'} 
        avatarUrl={item.rekomerAvatarUrl}
        fullName={item.rekomerName}
        createdAt={item.createdAt}
        wrapperStyle={{borderWidth: 0.5, padding: 10, color: Colors.C, borderRadius: 20, borderStyle: 'dashed', marginBottom: 10}}/>}
      keyExtractor={(item) => item.id}
      onEndReached={handleEndReached}
      onEndReachedThreshold={4}
    />
  )
}
export {Reaction}