import {View, Image} from "react-native"

const RestaurantGallery = () => {
  return(
    <View>
      <Image source={{uri: 'https://images.unsplash.com/photo-1675913480693-e02d3b16fcb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}/>
      <Image source={{uri: 'https://images.unsplash.com/photo-1675913480693-e02d3b16fcb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}/>
    </View>
  )
}
export {RestaurantGallery}