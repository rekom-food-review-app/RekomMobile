interface Media {
  mediaUrl: string
  type: string
}

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
  myReaction?: string,
  rekomerId: string,
  rekomerAvatarUrl: string
  rekomerFullName: string,
  restaurantName: string,
  restaurantId: string,
  restaurantCoordinates: string,
  rating: string,
}

export {type ReviewCardType}