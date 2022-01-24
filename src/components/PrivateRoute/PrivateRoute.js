import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, useLocation, Outlet } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  // auth: { isAuthenticated, Loading },
  ...rest
}) => {
  const user = useSelector((state) => state.user);
  //   const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) =>
        !user.isAuthenticated && !user.Loading ? (
          <Navigate to="/login" />
        ) : (
          <Outlet />
        )
      }
    />
  );
};

export default PrivateRoute;
