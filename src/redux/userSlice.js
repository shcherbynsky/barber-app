import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../http";

export const fetchUser = createAsyncThunk(
  "schedule/fetchUser",

  async (id) => {
    const { data } = await axios.get(
      `${BASE_URL}api/user${id >= 0 ? `?id=${id}` : ""}`
    );
    return data;
  }
);

export const fetchMyBookings = createAsyncThunk(
  "schedule/fetchMyBookings",

  async (id) => {
    if (id) {
      const { data } = await axios.get(
        `${BASE_URL}api/time${id >= 0 ? `?userId=${id}` : ""}`
      );
      return data;
    }
  }
);

// export const changeUserPass = createAsyncThunk(
//   "schedule/changeUserPass",

//   async (obj , {rejectWithValue}) => {
//     try {
//       const { data } = await axios.patch(`${BASE_URL}api/user`, obj);
//       return data;
//     } catch (error) {
//       return rejectWithValue( error.response.data );
//     }
//   }
// );

const initialState = {
  isLoading: true,
  isAuth: false,
  userInfo: {},
  bookingData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = {
        id: action.payload.id,
        name: action.payload.name,
        tel: action.payload.tel,
      };
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },

  extraReducers: {
    [fetchUser.pending]: (state) => {},
    [fetchUser.fulfilled]: (state, action) => {
      state.userInfo = {
        id: action.payload.id,
        name: action.payload.name,
        tel: action.payload.tel,
      };
    },
    [fetchUser.rejected]: (state) => {
      window.alert("error");
    },

    // ----------------------------------------------

    [fetchMyBookings.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMyBookings.fulfilled]: (state, action) => {
      state.bookingData = action.payload;
      state.isLoading = false;
    },
    [fetchMyBookings.rejected]: (state) => {
      window.alert("Помилка при отриманні данних");
    },

    // ----------------------------------------------

    // [changeUserPass.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [changeUserPass.fulfilled]: (state, action) => {
    //   console.log("change sucsess, data = ", action.payload);
    //   state.userInfo = {id: action.payload.id, name: action.payload.name, tel: action.payload.tel}
    //   state.isLoading = false;
    // },
    // [changeUserPass.rejected]: (state, action) => {
    //   console.log('action.payload = ', action.payload);
      
    //   window.alert(action.payload.message);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, setIsAuth, setIsLoading } = userSlice.actions;

export default userSlice.reducer;
