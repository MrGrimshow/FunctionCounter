import logo from './logo.svg';
import './App.css';
import ClassCounter from './Components/ClassCounter';
import React, { useState} from 'react';


  function App() {
    const [number, setNumber] = useState(0);
  
    function handleIncrease() {
      setNumber(number + 1);
    }
  
    function handleDecrease(){
      setNumber(number - 1)
    }

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={() => handleIncrease()}>Increase Count</button>
        <button onClick={() => handleDecrease()}>Decrease Count</button>
      </div>
    );
  }

export default App;


