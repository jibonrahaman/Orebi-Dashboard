import { configureStore } from '@reduxjs/toolkit'
import userSlices from './Slices/userSlices'

export const store = configureStore({
  reducer: {
    userLoginInfo :userSlices
  },
})