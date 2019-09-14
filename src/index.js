import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
  
  class App extends React.Component {
    render() {
      return (
        <div className="app">
          <div className="app-content">
                Here starts app
          </div>
          <div className="app-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  