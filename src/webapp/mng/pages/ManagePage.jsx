import React from 'react'
import { Switch } from 'react-router-dom'
import SurveyList from 'webapp/svy/components/SurveyList'
import UserList from 'webapp/usr/pages/UserList'
import ManagerRoute from '../components/ManagerRoute'
import Sidebar from '../components/Sidebar'

export default () => {
    return <>
        <div style={{ position: "relative" }}>
            <Sidebar />
            <Switch>
                <ManagerRoute auth="admin" path="/manage/userList" exact component={UserList} />
                <ManagerRoute auth="admin" path="/manage/survey" exact component={SurveyList} />
            </Switch>
        </div>
    </>
}