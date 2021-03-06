'use strict';

import React, { PropTypes } from 'react';
import LayoutVCM from 'templates/LayoutVCM';

export default function Slide(props) {
  return (
    <LayoutVCM>
      { props.question ? <h1>Demo</h1> : <h1>Demo <b>?</b></h1> }
    </LayoutVCM>
  );
}

Slide.propTypes = {
  question: PropTypes.bool.isRequired
};
