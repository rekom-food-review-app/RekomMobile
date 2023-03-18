import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReviewCardType } from "../../@types/ReviewCardType";

export interface SelectedRestaurantReviewListSliceType
{
  reviewList: ReviewCardType[]
}

const initialState: SelectedRestaurantReviewListSliceType = {
  reviewList: []
}

export const SelectedRestaurantReviewListSlice = createSlice({
  name: "SelectedRestaurantReviewList",
  initialState,
  reducers: {
    setReviewList(state, action: PayloadAction<ReviewCardType[]>){
      state.reviewList = action.payload
    }, 
    addReviewList(state, action: PayloadAction<ReviewCardType[]>){
      state.reviewList = state.reviewList.concat(action.payload)
    },
    addReviewToTop(state, action: PayloadAction<ReviewCardType>){
      state.reviewList.unshift(action.payload)
    }
  }
})

export const {addReviewList, addReviewToTop, setReviewList} = SelectedRestaurantReviewListSlice.actions

const SelectedRestaurantReviewListReducer = SelectedRestaurantReviewListSlice.reducer;

export {SelectedRestaurantReviewListReducer};