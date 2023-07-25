import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import About from "./pages/About"
import Battler from "./pages/Battler"
// import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="battler" element={<Battler />} />
        <Route path="home" element={<App />} />
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);