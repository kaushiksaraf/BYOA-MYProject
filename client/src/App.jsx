import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/HomePage.jsx";
import SignUP from "./components/SignUp/signup.jsx";
import About from "./components/About-Us/about";
import Contact from "./components/ContactUs/Contact.jsx"
import Explore from "./components/Explore/Explore";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUP />} />
      </Routes>
    </>
  );
}

export default App;
