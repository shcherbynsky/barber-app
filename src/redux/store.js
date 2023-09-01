import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './headerSlice'
import footerMenuReducer from './footerMenuSlice'
import scheduleReducer from './scheduleSlice'
export const store = configureStore({
  reducer: {
    header: headerReducer,
    footerMenu: footerMenuReducer,
    schedule: scheduleReducer
  },
})