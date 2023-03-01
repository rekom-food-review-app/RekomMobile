interface FoodDetailType {
  id: string,
  name: string,
  price: number,
  primaryImage: string
  images: string[],
  restaurantId: string,
  restaurantName: string,
  restaurantDescription:   string
}
export {type FoodDetailType}