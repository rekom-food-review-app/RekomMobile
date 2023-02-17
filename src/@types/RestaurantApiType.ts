interface RestaurantApiType {
    id: string
    name: string
    description: string
    coverImageUrl: string
    coordinates: string
    ratingResult: {
      averagePoint: number
      totalRating: number
      five: number
      four: number
      three: number
      two:number
      one:number
      restaurantId: string
    }
}
export {type RestaurantApiType}