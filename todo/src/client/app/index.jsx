import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './Com.jsx';

class App extends React.Component {
  render () {
    return <div>
        <p> Lets Play Some Games </p>
        <AwesomeComponent />
      </div>
  }
}

render(<App/>, document.getElementById('app'));