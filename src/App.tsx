import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./views/Home/Home";
import {Policy} from "./views/Policy/Policy";


function App() {
  return (
    <BrowserRouter basename={'/holidays'}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/policy" element={<Policy/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
