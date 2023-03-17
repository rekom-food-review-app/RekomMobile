import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantApiType } from "../../@types/RestaurantApiType";
import { restaurantApiInitState } from "../../constant/restaurantApiInitState";

export interface SelectedRestaurantType
{
  info: RestaurantApiType,
}

const initialState: SelectedRestaurantType = {
  info: restaurantApiInitState,
}

export const SelectedRestaurantSlice = createSlice({
  name: "selectedRestaurant",
  initialState,
  reducers: {
    setRestaurantInfoToInit(state) {
      state.info = restaurantApiInitState;
    },
    setRestaurantInfo(state, action: PayloadAction<RestaurantApiType>){
      state.info = action.payload
    }
  }
})

export const {setRestaurantInfo, setRestaurantInfoToInit} = SelectedRestaurantSlice.actions

const SelectedRestaurantReducer = SelectedRestaurantSlice.reducer;

export {SelectedRestaurantReducer};