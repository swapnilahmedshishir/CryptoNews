import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./Component/Navbars/Navbars";
import './App.css'
import HeaderScroll from "./Component/SmallComponent/HeaderScroll";
const App = () => {
  return (
    <div className="2xl:mx-6 border-x-2 border-gray-100 ">
      <Router>
        {/* <ScrollToTop /> */}
        <Navbars />
        <HeaderScroll/>
        <Routes>
          {/* <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />     

        <Route path="*" element={<Erro />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
