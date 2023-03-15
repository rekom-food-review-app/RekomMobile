import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantApiType } from "../../@types/RestaurantApiType";
import { ReviewCardType } from "../../@types/ReviewCardType";

export interface SelectedRestaurantType
{
  info: RestaurantApiType | null,
  reviewList: ReviewCardType[]
}

const initialState: SelectedRestaurantType = {
  info: null,
  reviewList: []
}

export const SelectedRestaurantSlice = createSlice({
  name: "selectedRestaurant",
  initialState,
  reducers: {
    setRestaurantInfo(state, action: PayloadAction<RestaurantApiType>){
      state.info = action.payload
    },
    setReviewList(state, action: PayloadAction<ReviewCardType[]>){
      state.reviewList = action.payload
    }, 
    addReviewList(state, action: PayloadAction<ReviewCardType[]>){
      state.reviewList = state.reviewList.concat(action.payload)
    },
    addReviewToTop(state, action: PayloadAction<ReviewCardType>) {
      state.reviewList.unshift(action.payload)
    }
  }
})

export const {setRestaurantInfo, addReviewList, addReviewToTop, setReviewList} = SelectedRestaurantSlice.actions

const SelectedRestaurantReducer = SelectedRestaurantSlice.reducer;

export {SelectedRestaurantReducer};