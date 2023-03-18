import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantSearch, Search } from "../screens";

const Stack = createNativeStackNavigator();

function SearchStack() 
{
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="RestaurantSearch" component={RestaurantSearch} />
      {/* <Stack.Screen name="BookingDetail" component={BookingDetail} /> */}
    </Stack.Navigator>
  )
}

export {SearchStack}