import ReactBase64image from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <ReactBase64image src="https://tu-dev.finxos.com/tu-resources/xlsfile/thumbnail/2019_04/2019_04_18/73796d626f6c9bc8e91a32651d7e31448a37ec442a38.png" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
