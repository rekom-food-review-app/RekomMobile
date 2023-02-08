import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface RegisterTabType 
{
  tab: 1 | 2 | 3
}

const initialState: RegisterTabType = {
  tab: 1
}

export const RegisterTabSlice = createSlice({
  name: "registerTab",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<1 | 2 | 3>) => {
      state.tab = action.payload
    },
  }
})

export const {setTab} = RegisterTabSlice.actions

const RegisterTabReducer = RegisterTabSlice.reducer;

export {RegisterTabReducer};