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
      <ScrollView>
        <ReviewCard wrapperStyle={{marginTop: 10}} isEmoijDisplay={false} />
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
      {
        tabEmoij == 1 ? (
        <View style={{paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, right: 0, left:0, paddingVertical: 10 }}>
          <TextField placeholder={'Reply to this review'} size={'md'}/>
          <Button label={'Send'} type={'secondary'} size={'xs'} wrapperStyle={{alignSelf: 'center'}}/>
        </View>) : null
      }
    </View>
  )
}
export {ReviewCardDetailLayout}