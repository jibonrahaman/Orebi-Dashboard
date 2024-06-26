import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: localStorage.getItem("userLoginInfo")? JSON.parse(localStorage.getItem("userLoginInfo")): null,
}

export const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginInfo: (state,action) => {
      state.userInfo = action.payload
    },   
  },
})

// Action creators are generated for each case reducer function
export const { userLoginInfo} = userSlices.actions

export default userSlices.reducer