import "./App.scss";
import "./reset.css";
import Header from "./components/Header";
import About from "./components/about/About";
import FooterMenu from "./components/FooterMenu";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./components/booking/Booking";
import ServiceChoose from "./components/booking/ServiceChoose";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <div className="main">
            <Routes >
              <Route path="/about" element={<About />}/>
              <Route path="/booking/*" element={<Booking />}/>

            </Routes>
          </div>
          <FooterMenu />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
