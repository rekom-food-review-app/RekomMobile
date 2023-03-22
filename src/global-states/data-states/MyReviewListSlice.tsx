import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RekomerProfileApiType } from "../../@types/RekomerProfileApiType"
import { ReviewCardType } from "../../@types/ReviewCardType"
import { rekomerProfileApiInitState } from '../../constant/rekomerProfileApiInitState'


export interface MyReviewListStateType
{
  reviewList: ReviewCardType[]
}

const initialState: MyReviewListStateType = {
  reviewList: []
}

export const MyReviewListSlice = createSlice({
  name: "myReviewListSlice",
  initialState,
  reducers: {
    setMyReviewList: (state, action: PayloadAction<ReviewCardType[]>) => {
      state.reviewList = action.payload
    },
    addToTopMyReviewList: (state, action: PayloadAction<ReviewCardType>) => {
      state.reviewList = [action.payload, ...state.reviewList]
    },
    pushListMyReviewList: (state, action: PayloadAction<ReviewCardType[]>) => {
      state.reviewList = [...state.reviewList, ...action.payload]
    }
  }
})

export const {setMyReviewList, addToTopMyReviewList, pushListMyReviewList} = MyReviewListSlice.actions

const MyReviewListReducer = MyReviewListSlice.reducer

export {MyReviewListReducer}