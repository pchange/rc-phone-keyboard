import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PhoneKeyboard from 'rc-phone-keyboard';
import 'rc-phone-keyboard/assets/index.less';

class Test extends Component {
  state = {};

  render() {
    return (<div>
      <div style={{ width: 400, margin: '100px auto' }}>
        <PhoneKeyboard value="138-01" />
      </div>
    </div>);
  }
}

ReactDOM.render(<Test />, document.getElementById('__react-content'));
