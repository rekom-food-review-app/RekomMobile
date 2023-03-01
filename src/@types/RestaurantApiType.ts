interface RestaurantApiType {
    id: string
    name: string
    description: string
    coverImageUrl: string
    coordinates: string
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

}
export {type RestaurantApiType}