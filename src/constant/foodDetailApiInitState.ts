import { FoodDetailType } from "../@types/FoodDetailApiType";

const foodDetailApiInitState: FoodDetailType ={
  foodId: '',
  foodName: '',
  foodPrice: 0,
  foodPrimaryImage: '',
  foodImageUrls: [],
  restaurantId: '',
  restaurantName: '',
  restaurantDescription: ''
}
export {foodDetailApiInitState}