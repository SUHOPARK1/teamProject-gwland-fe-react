import React from 'react'
import {Route,Redirect} from 'react-router-dom'

export default ({authenticated,componet:Component,render,...rest})=>{
    return <Route
        {...rest} render={(props)=>
        authenticated ? ( render ? (render(props)) : (<Component/>)) : ( <Redirect to="/login"/> )} />
}