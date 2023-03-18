import {createSlice} from '@reduxjs/toolkit'
import {type PayloadAction} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthTokenType
{
  accessToken: string,
  refreshToken: string
}

export interface ProfileType
{
  id: string,
  fullName: string,
  avatarUrl: string,
  description: string
}

export interface AuthStateType 
{
  authToken: AuthTokenType,
  profile: ProfileType
}

const initialState: AuthStateType = {
  authToken: {
    accessToken: '',
    refreshToken: ''
  },
  profile: {
    id: '',
    fullName: '',
    avatarUrl: '',
    description: ''
  }
}

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthSlice: (state) => {
      AsyncStorage.removeItem("accessToken")
      AsyncStorage.removeItem("profile")
      state.authToken = initialState.authToken
      state.profile = initialState.profile
    },
    setAuth: (state, action: PayloadAction<AuthTokenType>) => {
      AsyncStorage.setItem("accessToken", action.payload.accessToken)
      state.authToken = action.payload
    },
    setProfile: (state, action: PayloadAction<ProfileType>) => {
      AsyncStorage.setItem("profile", JSON.stringify(action.payload))
      state.profile = action.payload
    }
  }
})

export const {setAuth, setProfile, resetAuthSlice} = AuthSlice.actions

const AuthReducer = AuthSlice.reducer;

export {AuthReducer};