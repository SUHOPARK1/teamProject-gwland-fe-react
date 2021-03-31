import React, { Fragment } from "react";
import { Header } from "components/widgets";
import { useCustomState } from "state/state";
import Contacts2 from './Contacts2/Contacts2'
export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      
      <Contacts2 />
    </Fragment>
  );
};
