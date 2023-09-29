import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from "../http";
import axios from 'axios'

<<<<<<< HEAD
// const BASE_URL = "http://localhost:5000/"
=======
const BASE_URL = "https://material-serv-4e12e02d9e3b.herokuapp.com/"
>>>>>>> 0e516690881753ac9b026f75b85ec7f78ec0b39e
export const fetchService = createAsyncThunk(
  'schedule/fetchService',
  
  async (id) => {
    const {data} = await axios.get(`${BASE_URL}api/service${id >=0 ? `/${id}` : ''}`)
    return data

  }
)
export const fetchMaster = createAsyncThunk(
  'schedule/fetchMaster',
  
  async (id) => {
    const {data} = await axios.get(`${BASE_URL}api/master${id >=0 ? `/${id}` : ''}`)
    return data

  }
)
export const fetchBookedDate = createAsyncThunk(
  'schedule/fetchBookedDate',
  
  async (obj) => {
    const {data} = await axios.get(`${BASE_URL}api/time?date=${obj.date}&masterId=${obj.masterId}`)
    return data

  }
)

export const booking = createAsyncThunk(
  'schedule/booking',
  
  async (obj) => {
    const {data} = await axios.post(`${BASE_URL}api/time`, obj)
    return data
  }
)


const initialState = {
  startHours: 10,
  startMinutes: 0,
  endHours: 20,
  endMinutes: 0,
  services: [],
  masters: [],
  activeFooterMenu: 2,
  busyHours: [],
  chosenDate: '',
  chosenTime: {
    hours:-1,
    minutes:-1,
  },
  chosenService: -1,
  chosenMaster: -1,
  isBookingSuccessful: false,
  isLoading: false
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setActiveFooterMenu: (state, action) => {
      state.activeFooterMenu = action.payload
    },
    // setIsDateChosen: (state, action) => {
    //   action.payload ? state.isDateChosen = action.payload : state.isDateChosen = !state.isDateChosen
    // },
    // setIsServiceChosen: (state, action) => {
    //   action.payload ? state.isServiceChosen = action.payload : state.isServiceChosen = !state.isServiceChosen
    // },
    setChosenDate: (state, action) => {
        state.chosenDate = action.payload

      },
    setChosenTime: (state, action) => {
        state.chosenTime.hours = action.payload.hoursItem
        state.chosenTime.minutes = action.payload.minutesItem
      },
    setChosenService: (state, action) => {
        state.chosenService = action.payload
      },
    setServices: (state, action) => {
        state.services = action.payload
      },
    setChosenMaster: (state, action) => {
      state.chosenMaster = action.payload
    },
    setIsBookingSuccessful: (state, action) => {
      state.isBookingSuccessful = action.payload
    }
  },

  extraReducers: {
    [fetchService.pending]: (state) => {
      state.isLoading = true
    },
    [fetchService.fulfilled]: (state, action) => {
        state.services = action.payload
        state.isLoading = false
    },
    [fetchService.rejected]: (state) => {
        window.alert('error');
    },

    // -------------------------------------------

    [fetchMaster.pending]: (state) => {
      state.isLoading = true
    },
    [fetchMaster.fulfilled]: (state, action) => {
        state.masters = action.payload
        state.isLoading = false
    },
    [fetchMaster.rejected]: (state) => {
        window.alert('error');
    },


    [booking.pending]: (state) => {
      state.isLoading = true
    },
    [booking.fulfilled]: (state, action) => {
      state.isLoading = false  
      state.isBookingSuccessful = true

    },
    [booking.rejected]: (state) => {
        window.alert('error');
    },

    // ---------------------------------------------------

    [fetchBookedDate.pending]: (state) => {
      state.isLoading = true
    },
    [fetchBookedDate.fulfilled]: (state, action) => {
        state.busyHours = action.payload
        state.isLoading = false
    },
    [fetchBookedDate.rejected]: (state) => {
        window.alert('error');
    },
  }
})

// Action creators are generated for each case reducer function
export const { setChosenDate, setChosenService, setChosenMaster, setServices, setChosenTime, setIsBookingSuccessful } = scheduleSlice.actions

export default scheduleSlice.reducer
