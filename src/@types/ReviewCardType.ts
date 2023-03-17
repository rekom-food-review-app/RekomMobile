interface ReviewCardType 
{
  id: string
  createdAt: string
  content: string
  images: string[]
  amountDisagree: number,
  amountAgree: number,
  amountUseful: number,
  amountReply: number,
  myReactionId?: string,
  rekomerId: string,
  rekomerAvatarUrl: string
  rekomerFullName: string,
  restaurantName: string,
  restaurantId: string,
  // restaurantCoordinates: string,
  ratingId: string,
}

export {type ReviewCardType}