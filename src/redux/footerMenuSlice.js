import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeFooterMenu: 2
}

export const footerMenuSlice = createSlice({
  name: 'footerMenu',
  initialState,
  reducers: {
    setActiveFooterMenu: (state, action) => {
      state.activeFooterMenu = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setActiveFooterMenu } = footerMenuSlice.actions

export default footerMenuSlice.reducer