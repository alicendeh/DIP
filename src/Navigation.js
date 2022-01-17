import React, { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registeration";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <div className="App">{children}</div>;
}

function Navigation() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Registration />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default Navigation;
