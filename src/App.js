import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import {
  Blog,
  PostSingle,
  ServiceSingle,
  MemberCard,
  PortfolioSingle
} from "./components/pages";
import Home from './webapp/cmm/pages/Home'
import SurveyPage from './webapp/svy/pages/SurveyPage'
import Course from './webapp/crs/pages/Course'
import ManagePage from 'webapp/mng/pages/ManagePage'
import Sidebar from './webapp/cmm/layouts/Sidebar/Sidebar'
import Header from './webapp/cmm/layouts/Header/Header'
import {useCustomState} from './webapp/cmm/state/State'
import AuthRoute from "webapp/usr/components/AuthRoute";
import LoginForm from "webapp/usr/pages/LoginForm";
import PlacePage from "webapp/pce/pages/PlacePage";
import UserProfile from "webapp/usr/pages/UserProfile";
import OAuth2RedirectHandler from "webapp/usr/components/OAuth2RedirectHandler";

export default () => {
  const state = useCustomState()[0]
  
  return <>
    <Sidebar data={state.data.menu}/>
    <Header data={state.data.menu}/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/survey" exact component={SurveyPage} />
      <AuthRoute authenticated={null} path="/course" componet={Course}/>
      <Route path="/place" component={PlacePage}/>
      <Route path="/login" exact component={LoginForm}/>
      <Route path="/manage" component={ManagePage} />

      <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
      <Route path="/userprofile" component={UserProfile}/>

      <Route path="/blog/:post_id" exact component={PostSingle} />
      <Route
        path="/services/:service_id"
        exact
        component={ServiceSingle}
      />
      <Route path="/team/:member_id" exact component={MemberCard} />
      <Route
        path="/portfolio/:project_id"
        exact
        component={PortfolioSingle}
      />

      <Route path="/blog/cats/:category" exact>
        <Blog sidebar="left" layout="grid" />
      </Route>

      <Route path="/blog/user/:author" exact>
        <Blog sidebar="left" layout="grid" />
      </Route>

      <Route path="/blog/date/:posting_date" exact>
        <Blog sidebar="left" layout="grid" />
      </Route>

      <Route path="/blog/search/:query" exact>
        <Blog sidebar="left" layout="grid" />
      </Route>
    </Switch>
  </>;
};