import React, { Component } from 'react';
import Father from './Father';
import Child from './Child';

class Grand extends Component {
  render() {
    return (
      <>
        <h3 className="title3">Grand(조부모) 콤포넌트</h3>
        <Father/>
      </>
    );
  }
}

export default Grand;