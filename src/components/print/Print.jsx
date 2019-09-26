import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';

import CV from '../../CV';

class Print extends Component {
  render() {
    return (
      <div>
        <CV ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}

export default Print;
