import React, { Fragment } from "react";
import { Header } from "components/widgets";
import { useCustomState } from "state/state";
import Contacts2 from './Contacts2/Contacts2'
export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={state.data.header_bgs.contacts}>관광지 추가</Header>
      <Contacts2 />
    </Fragment>
  );
};
