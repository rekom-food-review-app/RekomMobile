interface FavoriteResApiType {
  id: string,
  restaurantId: string,
  restaurantName: string,
  restaurantCoverImageUrl: string
  restaurantRatingAverage: number,
  createdAt?: string
}

export {type FavoriteResApiType}