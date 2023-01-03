import React from 'react';
import ReactDOM from 'react-dom/client';
import Likes from './components/Likes';
import Dislikes from './components/Dislikes';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OverallRating from './components/OverallRating';
import Additional from './components/Additional';
import AdditionalLocation from "./components/AdditionalLocation"
import End from "./components/End"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Likes" element={<Likes/>} />
      <Route path="/Dislikes" element={<Dislikes />} />
      <Route path="/OverallRating" element={<OverallRating />} />
      <Route path="/Additional" element={<Additional/>} />
      <Route path="/AdditionalLocation" element={<AdditionalLocation/>} />
      <Route path="/End" element={<End/>} />
      
    </Routes>
  </Router>

);

export { default as Likes } from "./components/Likes";
export { default as Dislikes } from "./components/Dislikes";
export { default as Home } from "./components/Home";
export { default as OverallRating } from "./components/OverallRating";
export { default as Additional } from "./components/Additional";
export { default as AdditionalLocation } from "./components/AdditionalLocation";
export { default as End } from "./components/End";

