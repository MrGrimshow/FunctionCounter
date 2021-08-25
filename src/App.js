import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import React from 'react';


class App extends React.Component {
    constructor() {
      super();
      this.state = { number: 0};
    }
  
    AddOne() {
      this.setState({
        number: this.state.number + 1
      });
    }
  
    SubtractOne(){
      this.setState({
        number: this.state.number - 1
      })
    }
    render() {
      return (
        <div>
          <h1>{this.state.number}</h1>
          <button onClick={() => this.AddOne()}>Add 1</button>
          <button onClick={() => this.SubtractOne()}>Sub</button>
        </div>
      );
    }
  }


export default App;
