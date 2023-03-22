import {configureStore} from '@reduxjs/toolkit'
import {AuthReducer, RegisterTabReducer, RestaurantTabReducer, MyReviewListReducer, MyProfileReducer, FavoriteReducer, SelectedRestaurantReducer, SelectedRestaurantReviewListReducer} from "../global-states"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    registerTab: RegisterTabReducer,
    restaurantTab: RestaurantTabReducer,
    myProfile: MyProfileReducer,
    myReviewList: MyReviewListReducer,
    favorite: FavoriteReducer,
    selectedRestaurant: SelectedRestaurantReducer,
    selectedRestaurantReviewList: SelectedRestaurantReviewListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch