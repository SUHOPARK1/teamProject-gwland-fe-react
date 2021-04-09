import React from "react";
import { Route, Switch } from "react-router-dom";
import SurveyForm from '../components/SurveyForm'
import SurveyResult from "../components/SurveyResult";

export default ({match}) => {


  return (
    <>
		  <Switch>
            <Route path={match.url} exact component={SurveyForm}/>
            <Route path={match.url+"/result"} component={SurveyResult}/>
        </Switch>
    </>
  );
};
