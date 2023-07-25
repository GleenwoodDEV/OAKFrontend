import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";


import NavBar from "./components/NavBar";
import Users from "./pages/Users/";

import "./App.css";
import Auth from "./pages/Auth/";
import ForgotPassword from "./pages/Auth/ForgotPassword/";
import Cameras from "./pages/Cameras";
import { useEffect, useState } from "react";
import Business from "./pages/Business";



function App() {  
  const location = useLocation().pathname;
  
  return (
    <div className="App">
        {location !== "/login" && <NavBar />}
        <Routes>
          <Route path="login" element={<Auth />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="users" element={<Users />} />
          <Route path="cameras" element={<Cameras />} />
          <Route path="business" element={<Business />} />
          <Route path="/" element={<Auth />} />
        </Routes>
    </div>
  );
}

export default App;
