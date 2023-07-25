import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
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

function App() {
  const { pathname } = useLocation();

  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Auth />;
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="cameras" element={<Cameras />} />
        <Route path="business" element={<Business />} />
        <Route path="/" element={<Users />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
