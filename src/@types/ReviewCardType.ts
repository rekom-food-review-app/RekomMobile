interface Media {
  mediaUrl: string
  type: string
}

interface ReviewCardType 
{
  reviewId: string
  reviewTime: string
  reviewContent: string
  reviewMedias: Media[]
  amountDislike: number,
  amountLike: number,
  amountHelpful: number,
  amountComment: number,
  myReaction: null,
  rekomerId: string,
  rekomerAvatarUrl: string
  rekomerName: string,
  restaurantName: string,
  restaurantId: string,
  restaurantCoordinates: string 
}

export {type ReviewCardType}