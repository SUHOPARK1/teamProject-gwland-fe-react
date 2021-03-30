import React from 'react'
import {Switch,Route} from 'react-router-dom'
import SurveyList from 'webapp/svy/components/SurveyList'
import UserList from 'webapp/usr/pages/UserList'
import Sidebar from '../components/Sidebar'

export default ()=>{
    return <>
    <div style={{position:"relative"}}>
        <Sidebar/>
        <Switch>
            <Route path="/manage/userList" component={UserList}/>
            <Route path="/manage/survey" component={SurveyList}/>
        </Switch>
    </div>
    </>
}