import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Header from "./components/Header/Header";
import SelectWorks from "./pages/SelectWorks/SelectWorks";
import Welcome from "./pages/Welcome/Welcome";

console.log(
  '%c🌐 Want a stunning website? 🚀 %cReach out to%c Joe Young %cjoseph.m.young2@gmail.com',
  'color: #51355a; font-size: 18px; font-weight: bold; text-shadow: 2px 2px 4px rgba(81, 53, 90, 0.5);',
  'color: #3498db; font-size: 18px; font-weight: bold; text-decoration: underline;',
  'color: #e74c3c; font-size: 18px; font-weight: bold;',
  'color: #e67e22; font-size: 18px; font-weight: bold;'
);

function App() {
  return (

    <BrowserRouter>
      <HamburgerMenu />
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/selectworks" element={<SelectWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
