import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../http';



export const fetchUser = createAsyncThunk(
  'schedule/fetchUser',
  
  async (id) => {
    
    
      const {data} = await axios.get(`${BASE_URL}api/user${id >=0 ? `?id=${id}` : ''}`)
      return data
  }
)

export const fetchMyBookings = createAsyncThunk(
  'schedule/fetchMyBookings',
  
  async (id) => {
    console.log('id = ', id);
    if (id) {
      const {data} = await axios.get(`${BASE_URL}api/time${id >=0 ? `?userId=${id}` : ''}`)
       return data
    }
  }
)


const initialState = {
  isLoading: true,
  isAuth: false,
  userInfo: {},
  bookingData: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = {id: action.payload.id, name: action.payload.name, tel: action.payload.tel}
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },

  extraReducers: {
    [fetchUser.pending]: (state) => {
  
    },
    [fetchUser.fulfilled]: (state, action) => {
        state.userInfo = {id: action.payload.id, name: action.payload.name, tel: action.payload.tel}

        
    },
    [fetchUser.rejected]: (state) => {
        window.alert('error');
    },

    // ----------------------------------------------

    [fetchMyBookings.pending]: (state) => {
      state.isLoading = true
    },
    [fetchMyBookings.fulfilled]: (state, action) => {
      state.bookingData = action.payload
      state.isLoading = false
        
    },
    [fetchMyBookings.rejected]: (state) => {
        window.alert('Помилка при отриманні данних');
    },
  }
});

// Action creators are generated for each case reducer function
export const { setUserInfo, setIsAuth, setIsLoading} = userSlice.actions;

export default userSlice.reducer;
