import { createSlice } from "@reduxjs/toolkit"
import { type PayloadAction } from "@reduxjs/toolkit"


export interface FavoriteStateType
{

}

const initialState: FavoriteStateType = {

}

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<FavoriteStateType>) => {}
  }
})

export const {setFavorite} = FavoriteSlice.actions

const FavoriteReducer = FavoriteSlice.reducer

export {FavoriteReducer}