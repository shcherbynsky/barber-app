import React from "react";
import "./App.scss";
import "./reset.css";
import Header from "./components/Header";
import About from "./components/about/About";
import FooterMenu from "./components/FooterMenu";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserPart from "./components/UserPart";
import AdminPart from "./components/AdminPart/AdminPart";
import Auth from "./components/Auth/Auth";
import { check } from "./http/userAPI";
import Loader from "./components/Loader";
import { setIsAuth, setUserInfo } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    if (window.screen.width > 767.98) {
      window.alert(`Додаток було розроблено для мобільних пристроїв! На великих екранах він може відображатись некоректно. Вибачте за незручності!`)
    }
  }, [])
  
  React.useEffect(() => {
    try {
      check().then((data) => {
        if (data) {
          dispatch(setUserInfo({id: data.id, tel: data.tel, name: data.name}));
          dispatch(setIsAuth(true));
        }
      });
    } catch (error) {
      console.log("error = ", error);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<UserPart />} />
            <Route path="/admin" element={<AdminPart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
