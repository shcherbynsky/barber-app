import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  headerValue: 'Про заклад'
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderValue: (state, action) => {
      state.headerValue = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setHeaderValue } = headerSlice.actions

export default headerSlice.reducer