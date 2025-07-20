import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";



function App(props) {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'/About'} element={<About/>}/>
                  <Route path={'/Shop'} element={<Shop/>}/>
                  <Route path={'/Contact'} element={<Contact/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
