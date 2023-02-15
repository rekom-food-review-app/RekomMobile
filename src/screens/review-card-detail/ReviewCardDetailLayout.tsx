import {View} from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Colors } from '../../assets/colors'
import { Button, ReviewCard, TextField, UserActionInfo } from '../../components'
import { Comment } from './Comment'
import { EmoijBar } from './EmoijBar'
import { Like } from './Like'


const ReviewCardDetailLayout = () => {
  const tabEmoij = useSelector((state: RootState) => state.restaurantTab.tabRes)
  return(
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <ScrollView style={{marginTop: 20}}>
        <ReviewCard isEmoijDisplay={false} />
        <View style={{paddingHorizontal: 20}}>
          <EmoijBar tab={tabEmoij} />
          {
            tabEmoij == 1 ? <Comment /> : null
          }
          {
            tabEmoij == 2 ? <Like /> : null
          }
          {
            tabEmoij == 3 ? <Like /> : null
          }
          {
            tabEmoij == 4 ? <Like /> : null
          }
        </View>
      </ScrollView>
      </View>
  )
}
export {ReviewCardDetailLayout}