import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, MyProfile, FavoriteRes, Search } from "../screens";
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from "../assets/colors";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const profile = useSelector((state: RootState) => state.auth.profile)

  return(
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarStyle: bottomTabsStyle.tabBar,}}>
      <Tab.Screen options={{headerShown: false, 
                            tabBarIcon: ({ focused }) => (
                              <Icon name="tv" size={27} style={{ color: focused ? Colors.A : Colors.C }}/>
                              )}} name='Home' component={Home}/>
      <Tab.Screen options={{headerShown: false, 
                            tabBarIcon: ({ focused }) => (
                              <Icon name="search" size={27} style={{ color: focused ? Colors.A : Colors.C }}/>
                            )}} name='Search' component={Search}/>
      <Tab.Screen options={{headerShown: false, 
                            tabBarIcon: ({ focused }) => (
                              <Icon name="heart" size={27} style={{ color: focused ? Colors.A : Colors.C }}/>
                            )}} name='FavouriteRes' component={FavoriteRes}/>
      <Tab.Screen options={{headerShown: false, 
                            tabBarIcon: ({ focused }) => (
                              <Image source={{uri: profile.avatarUrl}} style={{width: 40, height: 40, borderRadius: 100}}/>
                          )}} name='MyProfile' component={MyProfile}/>
    </Tab.Navigator>
  )
}

const bottomTabsStyle = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 50,
    borderRadius: 100,
    borderWidth: 0,
    shadowColor: '#000',
    paddingHorizontal: 20,
  }
})
export {BottomTabs} 