import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./Component/Navbars/Navbars";
import './App.css'
const App = () => {
  return (
    <div className="mx-6">
      <Router>
        {/* <ScrollToTop /> */}
        <Navbars />
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
