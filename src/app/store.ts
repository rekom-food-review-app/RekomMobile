import {configureStore} from '@reduxjs/toolkit'
import {AuthReducer, RegisterTabReducer, RestaurantTabReducer, MyProfileReducer, FavoriteReducer, SelectedRestaurantReducer} from "../global-states"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    registerTab: RegisterTabReducer,
    restaurantTab: RestaurantTabReducer,
    myProfile: MyProfileReducer,
    favorite: FavoriteReducer,
    selectedRestaurant: SelectedRestaurantReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch