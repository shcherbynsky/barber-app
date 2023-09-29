import { createSlice } from "@reduxjs/toolkit";
import { getDataFromStorage } from "../utils/getDataFromStorage";

const initialState = {
  activeFooterMenu: getDataFromStorage('activeFooterMenu') >= 0 ? getDataFromStorage('activeFooterMenu') : 2,
  
};
export const footerMenuSlice = createSlice({
  name: "footerMenu",
  initialState,
  reducers: {
    setActiveFooterMenu: (state, action) => {
      state.activeFooterMenu = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveFooterMenu } = footerMenuSlice.actions;

export default footerMenuSlice.reducer;
