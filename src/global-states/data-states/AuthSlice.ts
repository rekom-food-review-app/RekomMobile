import {createSlice} from '@reduxjs/toolkit'
import {type PayloadAction} from '@reduxjs/toolkit'

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
      state.authToken = action.payload.authToken
    },
  }
})

export const {setAuth} = AuthSlice.actions

const AuthReducer = AuthSlice.reducer;

export {AuthReducer};