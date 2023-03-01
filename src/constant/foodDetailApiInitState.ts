import { FoodDetailType } from "../@types/FoodDetailApiType";

const foodDetailApiInitState: FoodDetailType ={
  id: '',
  name: '',
  price: 0,
  primaryImage: 'https://images.unsplash.com/photo-1583934754518-17915fd797f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80',
  images: [],
  restaurantId: '',
  restaurantName: '',
  restaurantDescription: ''
}
export {foodDetailApiInitState}