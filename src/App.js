import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import WrappedHome from "./components/Home";
import WrappedAbout from "./components/About";
import WrappedContact from "./components/Contact";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<WrappedHome />} />
          <Route path="/about" element={<WrappedAbout />} />
          <Route path="/contact" element={<WrappedContact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
