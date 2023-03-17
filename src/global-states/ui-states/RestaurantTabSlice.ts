import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RestaurantTabType {
  tabRes: 1 | 2 | 3 | 4
}

const initialState: RestaurantTabType = {
  tabRes: 1
}

export const RestaurantTabSlice = createSlice({
  name: "restaurantTab",
  initialState,
  reducers: {
    setResTab: (state, action: PayloadAction<1 | 2 | 3 |4>) => {
      console.log(action.payload)
      state.tabRes = action.payload
    },
  }
})
export const {setResTab} = RestaurantTabSlice.actions

const RestaurantTabReducer = RestaurantTabSlice.reducer;

export {RestaurantTabReducer}