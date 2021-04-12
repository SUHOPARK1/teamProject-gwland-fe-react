import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from './webapp/cmm/pages/Home'
import SurveyPage from './webapp/svy/pages/SurveyPage'
import Course from './webapp/crs/pages/Course'
import Mypage from './webapp/usr/pages/UserDetail'
import ManagePage from 'webapp/mng/pages/ManagePage'
import Sidebar from './webapp/cmm/layouts/Sidebar/Sidebar'
import Header from './webapp/cmm/layouts/Header/Header'
import {useCustomState} from './webapp/cmm/state/State'
import LoginForm from "webapp/usr/pages/LoginForm";
import PlacePage from "webapp/pce/pages/PlacePage";
import UserProfile from "webapp/usr/pages/UserProfile";
import OAuth2RedirectHandler from "webapp/usr/components/OAuth2RedirectHandler";
import Manage404 from "webapp/mng/pages/Manage404";
import UserRoute from "webapp/usr/components/UserRoute";
import ManagerRoute from "webapp/mng/components/ManagerRoute";

export default () => {
  const state = useCustomState()[0]
  const currentAuth = useSelector(state=>state.accountReducer.authorization)
  
  return <>
    <Sidebar data={state.data.menu}/>
    <Header data={state.data.menu}/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/survey" component={SurveyPage} />
      <Route path="/place" component={PlacePage}/>
      <Route path="/login" exact component={LoginForm}/>
      <UserRoute auth={currentAuth} path="/mypage" componet={Mypage}/>
      <ManagerRoute auth={currentAuth} path="/manage" component={ManagePage} />
      <Route path="/manage404" exact component={Manage404}/>
      <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
      <Route path="/userprofile" component={UserProfile}/>

    </Switch>
  </>;
};