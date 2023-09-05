import { createSlice } from '@reduxjs/toolkit'
import { getDataFromStorage } from '../utils/getDataFromStorage'

const initialState = {
  headerValue: 'Про заклад',
  activeAboutMenuItem: getDataFromStorage('activeAboutMenuItem') || 0
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderValue: (state, action) => {
      state.headerValue = action.payload
    },
    setActiveAboutMenuItem: (state, action) => {
      state.activeAboutMenuItem = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setHeaderValue, setActiveAboutMenuItem } = headerSlice.actions

export default headerSlice.reducer