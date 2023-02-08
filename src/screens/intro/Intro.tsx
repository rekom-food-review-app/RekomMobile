import { useNavigation } from "@react-navigation/native"
import { View, Text } from "react-native"

function Intro()
{
  const nav = useNavigation()
  
  return (
    <View>
      <Text>this is view</Text>
    </View>
  )
}

export {Intro}