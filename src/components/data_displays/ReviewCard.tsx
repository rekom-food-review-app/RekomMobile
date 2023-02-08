import { View, Image, StyleSheet } from "react-native"
import { UserActionInfo } from "./index";

function ReviewCard()
{
  return (
    <View>
      <UserActionInfo wrapperStyle={{marginBottom: 10, paddingHorizontal: 15}}/>
      <View>
        <Image style={{width: "100%", height: "80%"}} source={{uri: "https://images.unsplash.com/photo-1675416864738-373085409a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}/>
      </View>
    </View>  
  )
}

const defaultStyle = StyleSheet.create({
  
})

export {ReviewCard}