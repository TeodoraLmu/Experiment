import React from 'react';
import ReactDOM from 'react-dom/client';
import Likes from './components/Likes';
import Dislikes from './components/Dislikes';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OverallRating from './components/OverallRating';
import Additional from './components/Additional';
import CheckboxContainer from './components/CheckboxContainer';
import Email from './components/Email';
import EmojiContainer from './components/EmojiContainer';
import EmojiScale from './components/EmojiScale';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC832kcIPNmHQugfZ1OjqFXMgSaSTVq6WA",
  authDomain: "ma-travelbuddy.firebaseapp.com",
  projectId: "ma-travelbuddy",
  storageBucket: "ma-travelbuddy.appspot.com",
  messagingSenderId: "1037301896267",
  appId: "1:1037301896267:web:957e36f06f876d5460a9ce",
  measurementId: "G-3FYYGKRKJ1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Likes" element={<Email />} />
      <Route path="/Dislikes" element={<Dislikes />} />
      <Route path="/OverallRating" element={<OverallRating />} />
      <Route path="/Additional" element={<Additional/>} />
      <Route path="/Email" element={<Email/>} />
      <Route path="/CheckboxContainer" element={<CheckboxContainer/>} />
      <Route path="/EmojiContainer" element={<EmojiContainer/>} />
      <Route path="/EmojiScale" element={<EmojiScale/>} />
    </Routes>
    
  </Router>

);

export { default as Likes } from "./components/Likes";
export { default as Dislikes } from "./components/Dislikes";
export { default as Home } from "./components/Home";
export { default as OverallRating } from "./components/OverallRating";
export { default as Additional } from "./components/Additional";
export { default as Email } from "./components/Email";
export { default as CheckboxContainer} from "./components/CheckboxContainer";
export { default as EmojiContainer} from "./components/EmojiContainer";
export { default as EmojiScale} from "./components/EmojiScale";