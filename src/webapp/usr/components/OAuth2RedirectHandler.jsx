import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router'
import { login } from 'webapp/_actions';

const getUrlParameter= (name,search) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    var results = regex.exec(search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default ({location})=>{
    const token = getUrlParameter('token',location.search);
    const error = getUrlParameter('error',location.search);
    const dispatch = useDispatch()
    const URL = process.env.REACT_APP_API_URL

    if(token){
        localStorage.setItem('accessToken', token)
        axios.get(`${URL}/user/one`,{
            headers:{
                Authorization:'Bearer '+ localStorage.getItem('accessToken')
            }
        }).then(resp=>dispatch(login(resp.data)))
        return <Redirect to={{
            pathname: "/",
            state: { from: location }
        }}/>
    }else{
        return <Redirect to={{
            pathname: "/login",
            state: { 
                from: location,
                error: error 
            }
        }}/>
    }
}