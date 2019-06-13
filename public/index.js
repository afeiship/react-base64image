import ReactBase64image from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  render() {
    // will return text/xml
    const url1 =
      'https://tu-dev.finxos.com/tu-resources/images/thumbnail/2019_05/2019_05_17/73796d626f6c7b99c653ef06e736447973d7d2baf310.PNG' +
      '?t=' +
      Date.now();

      // will return text/xml
    const url =
      'https://tu-dev.finxos.com/tu-resources/images/thumbnail/2019_05/2019_05_17/73796d626f6c7b99c653ef06e736447973d7d2baf310.PNG' +
      '?t=' +
      Date.now();
    return (
      <div className="app-container">
        <ReactBase64image src={url} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
