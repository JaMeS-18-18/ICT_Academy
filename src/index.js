import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Kurslar from "./Pages/Kurslar/Kurslar";
import Home from "./Pages/Home/Home";
import InfoCourse from "./Pages/InfoCourse/InfoCourse";
import Portfolio from "./Pages/Portfolio/Portfolio";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import News_info from "./components/News_info/News_info";
import AboutPortfolio from "./Pages/Portfolio/AboutPortfolio";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <div className="w-screen h-screen flex flex-col">
       <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home/>}/>
            <Route path="/Courses" element={<Kurslar/>}/>
            <Route path="/InfoCourse/:id" element={<InfoCourse/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/News" element={<News/>}/>
            <Route path="/News_info" element={<News_info/>}/>
            <Route path="/Portfolio_info/:id" element={<AboutPortfolio/>}/>
          </Route> 
        </Routes>
       </div>
    </BrowserRouter>
  </React.StrictMode>
);
