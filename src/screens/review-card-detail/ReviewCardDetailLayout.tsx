import {View} from 'react-native'
import {ScrollView} from 'react-native-virtualized-view'
import {useSelector} from 'react-redux'
import {RootState} from '../../app/store'
import { HeaderBack, ReviewCard} from '../../components'
import { useRoute } from '@react-navigation/native'
import { ReviewCardType } from '../../@types/ReviewCardType'
import { useState } from 'react'
import React, { useRef } from 'react'
import { ReviewTabs } from './ReviewTabs'
import { CommentForm } from './CommentForm'

const ReviewCardDetailLayout: React.FC = () => {
   const route = useRoute();
   const tabEmoij = useSelector((state: RootState) => state.restaurantTab.tabRes)
   const [review] = useState<ReviewCardType>(route.params as ReviewCardType)

   return (
      <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
         <ScrollView>
            <HeaderBack type={'secondary'} title={'Review Details'}
                        wrapperStyle={{marginTop: 30, marginBottom: 20, paddingHorizontal: 20}}/>
            <ReviewCard
               {...review}
               textTouchingDisable={true}
               isEmojiDisplay={false}/>
            <ReviewTabs {...review} reviewId={review.id}/>
         </ScrollView>
         {
            tabEmoij == 1 ? (<CommentForm reviewId={review.id}/>) : null
         }
      </View>
   )
}

export {ReviewCardDetailLayout}