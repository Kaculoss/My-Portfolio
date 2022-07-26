import React from "react";
import NavMenu from "./Components/NavMenu";
import Footer from "./Components/Footer";
import { ScrollToBottom, ScrollToTop } from "./Components/ScrollButton";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import SmoothScrollBar from "./Components/MovetoTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <ScrollToTop />
          <ScrollToBottom />
          <Footer />
          <ToastContainer
            theme="colored"
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </SmoothScrollBar>
      </Router>
    </>
  );
}

export default App;
