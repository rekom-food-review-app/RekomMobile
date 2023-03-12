import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RekomerProfileApiType } from "../../@types/RekomerProfileApiType"
import { rekomerProfileApiInitState } from '../../constant/otherProfileApiInitState'


export interface MyProfileStateType
{
  myProfile: RekomerProfileApiType
}

const initialState: MyProfileStateType = {
  myProfile: rekomerProfileApiInitState
}

export const MyProfileSlice = createSlice({
  name: "myProfile",
  initialState,
  reducers: {
    setMyProfile: (state, action: PayloadAction<MyProfileStateType>) => {
      state.myProfile = action.payload.myProfile
    },
    updateAmountFollower: (state, action: PayloadAction<number>) => {
      state.myProfile.amountFollower += action.payload
    },
    updateAmountFollowing: (state, action: PayloadAction<number>) => {
      state.myProfile.amountFollowing += action.payload
    },
  }
})

export const {setMyProfile, updateAmountFollower, updateAmountFollowing} = MyProfileSlice.actions

const MyProfileReducer = MyProfileSlice.reducer

export {MyProfileReducer}