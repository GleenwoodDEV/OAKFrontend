import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Users from "./pages/Users/";

import "./App.css";
import Auth from "./pages/Auth/";
import Cameras from "./pages/Cameras";
import Business from "./pages/Business";
import { useSelector } from "react-redux";
import NewPassword from "./pages/Auth/NewPassword";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { pathname } = useLocation();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const message = useSelector((state) => state.message);

  useEffect(() => {
    if (!message) {
      return;
    }
    toast(message.message, {
      type: message.type,
    });
  }, [message]);

  return (
    <>
      {!isLoggedIn ? (
        <Auth />
      ) : (
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="cameras" element={<Cameras />} />
            <Route path="business" element={<Business />} />
            <Route path="newpassword" element={<NewPassword />} />
            <Route path="/" element={<Users />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Slide}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
