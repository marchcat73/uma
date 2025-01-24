'use client';
import React from 'react';

const VirtualKeyboard = ({ inputValue, setInputValue }: any) => {
  const handleKeyPress = (digit: any) => {
    setInputValue(inputValue + digit);
  };

  const handleBackspace = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  return (
    <div>
      {/* <input type="text" value={inputValue} readOnly /> */}
      <div className="keyboard">
        <button onClick={() => handleKeyPress('1')}>1</button>
        <button onClick={() => handleKeyPress('2')}>2</button>
        <button onClick={() => handleKeyPress('3')}>3</button>
        <button onClick={() => handleKeyPress('4')}>4</button>
        <button onClick={() => handleKeyPress('5')}>5</button>
        <button onClick={() => handleKeyPress('6')}>6</button>
        <button onClick={() => handleKeyPress('7')}>7</button>
        <button onClick={() => handleKeyPress('8')}>8</button>
        <button onClick={() => handleKeyPress('9')}>9</button>
        <button onClick={() => handleKeyPress('0')}>0</button>
        <button onClick={handleBackspace}>Backspace</button>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
