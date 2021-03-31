import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div clasName="App">
        <button onClick={this.setLocalStorage}>setLocalStorage</button>
        <button onClik={this.getLocalStorage}>getLocalStorage</button>
      </div>
    )

  }
  setLocalStorage() {
     localStorage.setItem('Arena', 'Selection Mounth');
  }
  getLocalStorage() {
    let myLocalStorageData = localStorage.getItem('Arena');
  }
}


export default App;
