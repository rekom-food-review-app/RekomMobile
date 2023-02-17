import { RestaurantApiType } from "../@types/RestaurantApiType";

const restaurantApiInitState: RestaurantApiType = {
    id: "",
    name: "",
    description: "",
    coverImageUrl: "",
    coordinates: "",
    ratingResult: {
      averagePoint: 0,
      totalRating: 0,
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0,
      restaurantId: "",
    }
}
export {restaurantApiInitState}