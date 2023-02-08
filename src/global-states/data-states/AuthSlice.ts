import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface AuthStateType 
{

}

const initialState: AuthStateType = {

}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth()
    {
      
    }
  }
})

const AuthReducer = AuthSlice.reducer;

export {AuthReducer};