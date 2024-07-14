import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./Component/Navbars/Navbars";
import "./App.css";
import HeaderScroll from "./Component/SmallComponent/HeaderScroll";
import Footer from "./Component/Footer/Footer";
import MainHome from "./Component/HomePage/MainHome";
import ArticalPage from "./Component/Artical/ArticalPage";
import NewsLetterOffer from "./Component/Newsletter/NewsLetterOffer";
import ProdCast from "./Component/ProdCast/ProdCast";
import CategoryNews from "./Component/CategoryNews/CategoryNews";
const App = () => {
  return (
    <div className="2xl:mx-6 border-x-2 border-gray-100 ">
      <Router>
        {/* <ScrollToTop /> */}
        <Navbars />

        <HeaderScroll />
        <Routes>
          <Route exact path="/" element={<MainHome />} />
          <Route exact path="/news/:title" element={<ArticalPage />} />
          <Route exact path="/newsletters" element={<NewsLetterOffer />} />
          <Route exact path="/podcasts" element={<ProdCast />} />
          <Route
            exact
            path="/category/:categoryName"
            element={<CategoryNews />}
          />
          {/* <Route path="/home" element={<HomePage />} />     

        <Route path="*" element={<Erro />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
