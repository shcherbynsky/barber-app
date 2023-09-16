import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './headerSlice'
import footerMenuReducer from './footerMenuSlice'
import scheduleReducer from './scheduleSlice'
import adminReducer from './adminSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    header: headerReducer,
    footerMenu: footerMenuReducer,
    schedule: scheduleReducer,
    admin: adminReducer,
    user: userReducer
  },
})