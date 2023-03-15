import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// @ts-ignore
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
   Home,
   Login,
   Loading,
   MyProfile,
   OtherProfile,
   RegisterLayout,
   RestaurantLayout,
   ReviewCardDetailLayout,
   ReviewForm,
   Follow
} from './screens';
import {store} from './app/store'
import {Provider} from 'react-redux'
import { FoodDetail } from './screens/restaurants/FoodDetail';
import { BottomTabs } from './navigations';

export const RootStack = createNativeStackNavigator();

const App = () => {
   return (
      <Provider store={store}>
         <NavigationContainer>
            <RootStack.Navigator>
               {/* <RootStack.Screen options={{title: "", headerShown: false}} name='LoadingScreen' component={Loading}/> */}
               <RootStack.Screen options={{title: "", headerShown: false}} name='LoginScreen' component={Login}/>
               <RootStack.Screen options={{headerShown: false}} name="BottomTabs" component={BottomTabs}/>
               <RootStack.Screen options={{title: ""}} name='RegisterScreen' component={RegisterLayout}/>

               <RootStack.Screen options={{headerShown: false}} name='Food' component={FoodDetail}/>
               <RootStack.Screen options={{headerShown: false}} name='RestaurantScreen' component={RestaurantLayout}/>
               <RootStack.Screen options={{headerShown: false}} name='ReviewForm' component={ReviewForm}/>
               <RootStack.Screen options={{headerShown: false}} name='ReviewCardDetailScreen' component={ReviewCardDetailLayout}/>

               <RootStack.Screen options={{headerShown: false}} name='OtherProfileScreen' component={OtherProfile}/>

               {/* <RootStack.Screen options={{headerShown: false}} name='HomeScreen' component={Home}/> */}
               <RootStack.Screen options={{headerShown: false}} name='Follow' component={Follow}/>


            </RootStack.Navigator>
         </NavigationContainer>
      </Provider>
   );
};

export default App;