import { RestaurantApiType } from "../@types/RestaurantApiType";

const restaurantApiInitState: RestaurantApiType = {
    id: "",
    name: "",
    description: "",
    coverImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo54hpuEkGK1gxr7JFQ6e9J7JoVv_PaFVDZVr9fvbhJTBBiyRxUpcpA360_JbGE_nrMAk&usqp=CAU",
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