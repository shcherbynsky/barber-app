import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addMaster = createAsyncThunk(
  "admin/addMaster",

  async (obj) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/master",
        obj
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  inputMasterNameValue: '',
  image: ''
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setInputMasterNameValue: (state, action) => {
      state.inputMasterNameValue = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setInputMasterNameValue, setImage} = adminSlice.actions;

export default adminSlice.reducer;
