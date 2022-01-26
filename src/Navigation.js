import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registeration from "./pages/Registeration/Registeration";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AllUsers, Books, Upload, Profile } from "./pages";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Upgrade from "./pages/Upgrade/Upgrade";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Alert from "./components/Alert/Alert";
function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <div className="App">{children}</div>;
}

function Navigation() {
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Registeration />} />

          <Route exact path="/login" element={<Login />} />

          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route exact path="/users" element={<AllUsers />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/upload" element={<Upload />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/upgradetopremium" element={<Upgrade />} />

          <Route path="*" element={<NotFound msg={"Page Not Found"} />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
