interface FoodDetailType {
  foodId: string,
  foodName: string,
  foodPrice: number,
  foodPrimaryImage: string
  foodImageUrls: string[],
  restaurantId: string,
  restaurantName: string,
  restaurantDescription:   string
}
export {type FoodDetailType}