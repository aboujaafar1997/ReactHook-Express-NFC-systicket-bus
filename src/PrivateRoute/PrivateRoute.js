import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={props => {
            if (rest.islogin && rest.iscompnentLogin) {
                return <Redirect
                to={{ pathname: "/home", state: { from: props.location, message: "welcome again" } }}
                    />
                }
                else if (!rest.islogin && rest.iscompnentLogin) {
                    return <Component {...props} {...rest}/>
                }
                else if (rest.islogin && !rest.iscompnentLogin) {
                    return <Component {...props} {...rest} />
                }
                else {
                    return <Redirect
                        to={{ pathname: "/login", state: { from: props.location, message: "please login" } }}
                    />
                }
            }}

        />
    );
}
