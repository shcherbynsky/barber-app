import "./App.scss";
import "./reset.css";
import Header from "./components/Header";
import About from "./components/about/About";
import FooterMenu from "./components/FooterMenu";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./components/booking/Booking";
import ServiceChoose from "./components/booking/ServiceChoose";
import { useSelector } from "react-redux";
import Profile from "./components/profile/Profile";
import Contacts from "./components/about/Contacts";

function App() {
  const { activeFooterMenu } = useSelector((state) => state.footerMenu);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="main">
            {activeFooterMenu === 0 && <Booking />}
            {activeFooterMenu === 1 && <Profile />}
            {activeFooterMenu === 2 && <About />}
            {activeFooterMenu === 4 && <Contacts />}
            
          </div>
          <FooterMenu />
        </div>
      </div>
    </BrowserRouter>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <div className="wrapper">
//         <BrowserRouter>
//           <Header />
//           <div className="main">
//             <Routes >
//               <Route path="/about" element={<About />}/>
//               <Route path="/booking/*" element={<Booking />}/>

//             </Routes>
//           </div>
//           <FooterMenu />
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// }

export default App;
