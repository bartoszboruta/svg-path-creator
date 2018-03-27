import React, { Component } from 'react';
import { PathCreator } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
          <svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">
              <PathCreator />
          </svg>
      </div>
    );
  }
}

export default App;
