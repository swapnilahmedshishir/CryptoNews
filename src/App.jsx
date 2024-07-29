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
import Search from "./Component/Search/Search";
import CryptoPrices from "./Component/CryptoPrices/CryptoPrices";
import Events from "./Component/Events/Events";
import About from "./Component/About/About";
import Advertise from "./Component/Advertise/Advertise";
import Careers from "./Component/Careers/Careers";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import { ContactUs } from "./Component/ContactUs/ContactUs";
import { Audio } from "./Component/Audio/Audio";
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
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/prices" element={<CryptoPrices />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/advertise" element={<Advertise />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          {/* <Route path="*" element={<Erro />} /> */}
        </Routes>
        {/* <Audio /> */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
