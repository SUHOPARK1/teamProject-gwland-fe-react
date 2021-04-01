import React, { Fragment } from "react";
import {
  Slider,
} from "components/widgets";

import { useCustomState } from "webapp/cmm/state/State";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
          <Slider data={state.data.posts} />
          
    </Fragment>
  );
};