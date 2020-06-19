import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const Nav = ({ component: Component, ...rest }) => {
    console.log(rest);
    return (
        <Route
            render={props => {
                return <Component {...props} {...rest} />
            }}
        />
    );
}
