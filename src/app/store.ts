import {configureStore} from '@reduxjs/toolkit'
import {AuthReducer, RegisterTabReducer, RestaurantTabReducer} from "../global-states"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    registerTab: RegisterTabReducer,
    restaurantTab: RestaurantTabReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch