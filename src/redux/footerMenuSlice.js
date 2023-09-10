import { createSlice } from "@reduxjs/toolkit";
import { getDataFromStorage } from "../utils/getDataFromStorage";

const initialState = {
  activeFooterMenu: getDataFromStorage('activeFooterMenu') >= 0 ? getDataFromStorage('activeFooterMenu') : 2,
  // menuItems: [
  //   { logo: "<TfiCalendar />", title: "Запис", link: "/booking" },
  //   { logo: "<TfiUser />", title: "Профіль", link: "/profile" },
  //   { logo: "<TfiInfoAlt />", title: "Про нас", link: "/about" },
  //   { logo: "<TfiBook />", title: "Мої записи", link: "/mybooking" },
  //   { logo: "<TfiLocationPin />", title: "Контакти", link: "/contacts" },
  // ],
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
