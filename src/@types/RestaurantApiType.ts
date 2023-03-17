interface RestaurantApiType {
    id: string
    name: string
    description: string
    coverImageUrl: string
    coordinates: {
        latitude: number,
        longitude: number
    }
    ratingResult: {
        average: number
        amount: number
        percentFive: number
        percentFour: number
        percentThree: number
        percentTwo:number
        percentOne:number
    }
    restaurantId: string
    isMyFav: boolean
    address: string
    canReview: boolean
}
export {type RestaurantApiType}