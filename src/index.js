import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Kurslar from "./Pages/Kurslar/Kurslar";
import Home from "./Pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import InfoCourse from "./Pages/InfoCourse/InfoCourse";
import Portfolio from "./Pages/Portfolio/Portfolio";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import News_info from "./components/News_info/News_info";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence initial={true}  mode="wait">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home/>}/>
            <Route path="/Courses" element={<Kurslar/>}/>
            <Route path="/InfoCourse" element={<InfoCourse/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/News" element={<News/>}/>
            <Route path="/News_info" element={<News_info/>}/>
          </Route> 
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
