import React, { useState } from 'react';
import './App.css';
import { TextField, Button } from '@mui/material';

function App() {
  const [input, setInput] = useState(''); // state to hold the current input

  // Function to update the input as user clicks buttons
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value); // Concatenate button value
  };

  // Function to evaluate the expression and update the result
  const handleEquals = () => {
    try {
      // Safely evaluate the expression using Function constructor
      const result = Function(`"use strict"; return (${input})`)();
      setInput(result.toString());
    } catch (error) {
      setInput("Error"); // Show error on invalid input
    }
  };

  // Function to clear the screen
  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="container text-center">
      <h1 className="my-5" style={{ fontFamily: 'fantasy' }}>Calculator App</h1>
      <div className="calc-body mt-5 border mx-auto" style={{ maxWidth: '400px', backgroundImage: 'linear-gradient(black, grey)' }}>
        <div className="calc-screen p-4">
          <TextField value={input} className="w-100" style={{ backgroundColor: 'white' }} variant="outlined" />
        </div>
        <div className="cal-button-row">
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,rgb(113, 55, 14))', color: 'white' }} onClick={() => handleClick('7')}>7</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,rgb(113, 55, 14))', color: 'white' }} onClick={() => handleClick('8')}>8</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,rgb(113, 55, 14))', color: 'white' }} onClick={() => handleClick('9')}>9</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(rgb(113, 55, 14),black)', color: 'white' }} onClick={() => handleClick('*')}>*</Button>
        </div>
        <div className="cal-button-row">
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,rgb(113, 55, 14))', color: 'white' }} onClick={() => handleClick('4')}>4</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,rgb(113, 55, 14))', color: 'white' }} onClick={() => handleClick('5')}>5</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,rgb(113, 55, 14))', color: 'white' }} onClick={() => handleClick('6')}>6</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(rgb(113, 55, 14),black)', color: 'white' }} onClick={() => handleClick('-')}>-</Button>
        </div>
        <div className="cal-button-row">
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,rgb(113, 55, 14))', color: 'white' }} onClick={() => handleClick('1')}>1</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,rgb(113, 55, 14))', color: 'white' }} onClick={() => handleClick('2')}>2</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,rgb(113, 55, 14))', color: 'white' }} onClick={() => handleClick('3')}>3</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(rgb(113, 55, 14),black)', color: 'white' }} onClick={() => handleClick('+')}>+</Button>
        </div>
        <div className="cal-button-row mb-5">
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,brown)', color: 'white' }} onClick={handleClear}>AC</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(black,rgb(113, 55, 14))', color: 'white' }} onClick={() => handleClick('0')}>0</Button>
          <Button className="border m-1" style={{ backgroundImage:'linear-gradient(rgb(113, 55, 14),black)', color: 'white' }} onClick={() => handleClick('/')}>/</Button>
          <Button className="border m-1" style={{backgroundImage:'linear-gradient(rgb(113, 55, 14),black)', color: 'white' }} onClick={handleEquals}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
