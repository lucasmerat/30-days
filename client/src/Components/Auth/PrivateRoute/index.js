import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const userId = rest.readCookie();
    return (<Route {...rest} render={(props) => (
        userId
        ? <Component {...rest} {...props}/>
        : <Redirect to="/" />
    )} />)
};

export default PrivateRoute
