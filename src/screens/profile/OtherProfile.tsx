import {View} from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { Colors } from '../../assets/colors'
import { CsOtherProfile, ReviewCard } from '../../components'

const OtherProfile = () => {
  return(
    <ScrollView style={{backgroundColor: Colors.B}}>
      <CsOtherProfile />
      <ReviewCard isEmoijDisplay={false}/>
      <ReviewCard />
      <ReviewCard />
    </ScrollView>
  )
}
export {OtherProfile}