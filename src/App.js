import "./App.css";
import Welcome from "./Welcome";
import About from "./About";
import Contact from "./Contact";
import SelectWorks from "./SelectWorks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function App() {
  return (
    <div className="App">
      <HamburgerMenu />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />

          <Route path="/welcome" element={<Welcome />} />

          <Route path="/about" element={<About />} />

          <Route path="/selectworks" element={<SelectWorks />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
