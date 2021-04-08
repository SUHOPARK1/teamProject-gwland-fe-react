import React from 'react'
import {  Redirect } from 'react-router-dom'

export default ({ auth, componet: Component, ...rest }) => {
    if (auth === "public") {
        alert('로그인이 필요한 서비스입니다.')
        return <Redirect to="/login" />
    } else {
        return <Component />
    }
}

