import { createSlice } from "@reduxjs/toolkit"
import { type PayloadAction } from "@reduxjs/toolkit"
import { FavoriteResApiType } from "../../@types/FavoriteResApiType"

export interface FavoriteStateType
{
  favoriteList: FavoriteResApiType[]
}

const initialState: FavoriteStateType = {
  favoriteList: []
}

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<FavoriteResApiType[]>) => {
      state.favoriteList = action.payload
    },
    addFavorite: (state, action: PayloadAction<FavoriteResApiType>) => {
      state.favoriteList.unshift(action.payload)
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      const index = state.favoriteList.findIndex((item) => {
        return item.restaurantId == action.payload
      })
      state.favoriteList.splice(index, 1)
    }
  }
})

export const {setFavorite, addFavorite, deleteFavorite} = FavoriteSlice.actions

const FavoriteReducer = FavoriteSlice.reducer

export {FavoriteReducer}