import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../hooks";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useUser();
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={"/signin"} />
        )
      }
    />
  );
};

export default PrivateRoute;
