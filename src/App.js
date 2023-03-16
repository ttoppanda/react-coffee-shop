import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//class NamaKomponen extends Component
class App extends Component {
  //state merupakan variable lokal dari class (object)
  //jika state berubah maka component diperbarui (rerender)
  //untuk mengubah state menggunakan setState
  state = {
    counter : 0,
    address : "Jakarta"
  };
  changeCounter = () => {
    this.setState({
      counter : 2,
    });
  };
  render() {
    console.log(this.state.counter);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
          <p>This Counter : {this.state.counter}</p>
          <button onClick={this.changeCounter}>Change counter</button>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
