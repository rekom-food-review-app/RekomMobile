import {configureStore} from '@reduxjs/toolkit'
import {AuthReducer, RegisterTabReducer} from "../global-states"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    registerTab: RegisterTabReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch