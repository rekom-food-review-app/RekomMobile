import { RestaurantApiType } from "../@types/RestaurantApiType";

const restaurantApiInitState: RestaurantApiType = {
    id: "",
    name: "",
    description: "",
    coverImageUrl: "https://i.pinimg.com/originals/44/f3/8f/44f38f786d1a2c63904b64a6b17e6634.png",
    coordinates: {
        latitude: 17.5914,
        longitude: 85.5718
    },
    ratingResult: {
        average: 0,
        amount: 0,
        percentFive: 0,
        percentFour: 0,
        percentThree: 0,
        percentTwo:0,
        percentOne:0,
    },
    restaurantId: '',
    isMyFav: false,
    address: '',
    canReview: false
}
export {restaurantApiInitState}