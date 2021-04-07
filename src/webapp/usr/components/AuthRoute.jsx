import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export default ({ auth, componet: Component, render, ...rest }) => {
    const authorization = useSelector(state => state.accountReducer.authorization)
    console.log(auth)
    console.log(authorization)

    return <Route
        {...rest} render={(props) =>
            false ? (render ? (render(props)) : (<Component />)) : (<Redirect to="/login" />)} 
            
            />

}