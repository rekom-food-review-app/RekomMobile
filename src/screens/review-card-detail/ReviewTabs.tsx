import { View } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { CommentSection } from "./CommentSection"
import { EmoijBar } from "./EmoijBar"
import { Reaction } from "./Reaction"

interface ReviewTabsProps
{
  reviewId: string,
  amountDisagree: number,
  amountAgree: number,
  amountUseful: number,
  amountReply: number,
}

function ReviewTabs(props: ReviewTabsProps) 
{
  const tabEmoij = useSelector((state: RootState) => state.restaurantTab.tabRes)

  return (
    <View style={{paddingHorizontal: 20, marginBottom: 70}}>
      <EmoijBar {...props} tab={tabEmoij}
        // restaurantCoordinates={review.restaurantCoordinates}
      />
      {
        tabEmoij == 1 ? <CommentSection reviewId={props.reviewId} /> : null
      }
      {
        tabEmoij == 2 ? <Reaction reactionId="1" reviewId={props.reviewId}  /> : null
      }
      {
        tabEmoij == 3 ? <Reaction reactionId="3" reviewId={props.reviewId} /> : null
      }
      {
        tabEmoij == 4 ? <Reaction reactionId="2" reviewId={props.reviewId}/> : null
      }
  </View>
  )
}

export {ReviewTabs}