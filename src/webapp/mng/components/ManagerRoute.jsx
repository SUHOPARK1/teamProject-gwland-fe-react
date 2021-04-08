import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default ({ auth, ...rest }) => {
    if(auth==="admin"){
        return <Route {...rest}/>
    }else{
        return <Redirect to="/manage404"/>
    }
}
