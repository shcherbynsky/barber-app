import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchService = createAsyncThunk(
  'schedule/fetchService',
  
  async (id) => {
    const {data} = await axios.get(`http://localhost:5000/api/service${id >=0 ? `/${id}` : ''}`)
    return data

  }
)
export const fetchMaster = createAsyncThunk(
  'schedule/fetchMaster',
  
  async (id) => {
    const {data} = await axios.get(`http://localhost:5000/api/master${id >=0 ? `/${id}` : ''}`)
    return data

  }
)
export const fetchBookedDate = createAsyncThunk(
  'schedule/fetchBookedDate',
  
  async (obj) => {
    const {data} = await axios.get(`http://localhost:5000/api/time?date=${obj.date}&masterId=${obj.masterId}`)
    return data

  }
)

export const booking = createAsyncThunk(
  'schedule/booking',
  
  async (obj) => {
    // const obj = {date, hours, minutes, serviceId, masterId}
    // console.log(obj);
    const {data} = await axios.post('http://localhost:5000/api/time', obj)
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
  // isDateChosen: false,
  // chosenYear: 0,
  // chosenMonth: 0,
  // chosenDay: 0,
  chosenDate: '',
  chosenTime: {
    hours:-1,
    minutes:-1,
  },
  // isServiceChosen: true,
  chosenService: -1,
  chosenMaster: -1,
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
    // setChosenYear: (state, action) => {
    //   state.chosenYear = action.payload
    // },
    // setChosenMonth: (state, action) => {
    //   state.chosenMonth = action.payload
    // },
    // setChosenDay: (state, action) => {
    //   state.chosenDay = action.payload
    // },
    setChosenMaster: (state, action) => {
      state.chosenMaster = action.payload
    },
    
  },

  extraReducers: {
    [fetchService.pending]: (state) => {
  
    },
    [fetchService.fulfilled]: (state, action) => {
        state.services = action.payload
    },
    [fetchService.rejected]: (state) => {
        window.alert('error');
    },


    [fetchMaster.pending]: (state) => {
  
    },
    [fetchMaster.fulfilled]: (state, action) => {
        state.masters = action.payload
    },
    [fetchMaster.rejected]: (state) => {
        window.alert('error');
    },


    [booking.pending]: (state) => {
  
    },
    [booking.fulfilled]: (state, action) => {
        console.log(action.payload);
    },
    [booking.rejected]: (state) => {
        window.alert('error');
    },


    [fetchBookedDate.pending]: (state) => {
  
    },
    [fetchBookedDate.fulfilled]: (state, action) => {
        state.busyHours = action.payload
    },
    [fetchBookedDate.rejected]: (state) => {
        window.alert('error');
    },
  }
})

// Action creators are generated for each case reducer function
export const { setChosenDate, setChosenService, setChosenMaster, setServices, setChosenTime } = scheduleSlice.actions

export default scheduleSlice.reducer