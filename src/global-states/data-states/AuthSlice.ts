import {createSlice} from '@reduxjs/toolkit'
import {type PayloadAction} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthStateType 
{
  authToken: {
    accessToken: string,
    refreshToken: string
  }
}

const initialState: AuthStateType = {
  authToken: {
    accessToken: '',
    refreshToken: ''
  }
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthStateType>) => {
      AsyncStorage.setItem("accessToken", action.payload.authToken.accessToken)
      state.authToken = action.payload.authToken
    }
  }
})

export const {setAuth} = AuthSlice.actions

const AuthReducer = AuthSlice.reducer;

export {AuthReducer};