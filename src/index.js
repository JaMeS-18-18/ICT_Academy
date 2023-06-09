import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Kurslar from "./Pages/Kurslar/Kurslar";
import Home from "./Pages/Home/Home";
import { AnimatePresence } from "framer-motion";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence initial={true}  mode="wait">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home/>}/>
            <Route path="/Courses" element={<Kurslar/>}/>
          </Route> 
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
