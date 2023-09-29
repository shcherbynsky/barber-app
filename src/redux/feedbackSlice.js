import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../http";

export const fetchFeedbacks = createAsyncThunk(
  "feedback/fetchFeedbacks",
  async () => {
    const { data } = await axios.get(
      `${BASE_URL}api/feedback`
    );
    return data;
  }
);


export const addFeedbacks = createAsyncThunk(
  "feedback/addFeedbacks",
  async ({rating, text, userId}, {rejectWithValue}) => {
    try {
      const {data} = await axios.post(
        `${BASE_URL}api/feedback`, {rating, text, userId}
      );
      return data;

    } catch (error) {
      // console.log('error =', error.response.data.message);
      
      return rejectWithValue(error.response.data.message)
    }
    
    
  }
);





const initialState = {
  isLoading: false,
  ratingValue: null,
  feedbackData: [],
  errorMessage: ''
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setRatingValue: (state, action) => {
      state.ratingValue = action.payload
    },
    // setIsAuth: (state, action) => {
    //   state.isAuth = action.payload;
    // },
    // setIsLoading: (state, action) => {
    //   state.isLoading = action.payload;
    // },
  },

  extraReducers: {
    

    

    [fetchFeedbacks.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchFeedbacks.fulfilled]: (state, action) => {
      state.feedbackData = action.payload;
      state.isLoading = false;
    },
    [fetchFeedbacks.rejected]: (state, action) => {
      state.errorMessage = action.payload
      state.isLoading = false;
    },

    // -----------------------------------------

    [addFeedbacks.pending]: (state) => {
      // state.isLoading = true;
    },
    [addFeedbacks.fulfilled]: (state, action) => {
      // state.isLoading = false;
    },
    [addFeedbacks.rejected]: (state, action) => {
      
      state.errorMessage = action.payload
      // state.isLoading = false;
    },

    
  },
});

// Action creators are generated for each case reducer function
export const { setRatingValue } = feedbackSlice.actions;

export default feedbackSlice.reducer;
