import "./App.scss";
import "./reset.css";
import Header from "./components/Header";
import About from "./components/about/About";
import FooterMenu from "./components/FooterMenu";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import UserPart from "./components/UserPart";
import AdminPart from "./components/AdminPart/AdminPart";

function App() {
  const { activeFooterMenu } = useSelector((state) => state.footerMenu);

  return (
    <BrowserRouter>
        <div className="App">
          <div className="wrapper">
      <Routes>
          <Route path='/' element={<UserPart />}/>
          <Route path='/admin' element={<AdminPart />}/>
          
      </Routes>
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
