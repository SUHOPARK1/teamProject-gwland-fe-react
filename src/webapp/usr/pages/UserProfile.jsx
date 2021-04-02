import axios from 'axios';
import React, { useEffect } from 'react';

export default () => {
    useEffect(() => {
        axios.get('http://localhost:8080/user/one', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
        })
            .then(respone => console.log(respone))
            .catch(err => console.log(err))
    })

    return <>
    </>
}
