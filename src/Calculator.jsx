// Calculator.js

import React, { useState } from 'react';
import './tailwind.css'; // Import your Tailwind CSS file

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <input
        type="text"
        value={result}
        className="w-full bg-gray-900 text-white p-4 rounded-md mb-4"
        readOnly
      />
      <div className="grid grid-cols-4 gap-4">
        <button
          className="bg-gray-700 text-white p-4 rounded-md col-span-2"
          onClick={clear}
          name="AC"
        >
          AC
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="/" onClick={handleClick}>
          /
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="*" onClick={handleClick}>
          x
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="-" onClick={handleClick}>
          -
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="7" onClick={handleClick}>
          7
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="8" onClick={handleClick}>
          8
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="9" onClick={handleClick}>
          9
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="+" onClick={handleClick}>
          +
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="4" onClick={handleClick}>
          4
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="5" onClick={handleClick}>
          5
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="6" onClick={handleClick}>
          6
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="1" onClick={handleClick}>
          1
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="2" onClick={handleClick}>
          2
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="3" onClick={handleClick}>
          3
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="0" onClick={handleClick}>
          0
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="00" onClick={handleClick}>
          00
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="." onClick={handleClick}>
          .
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name="(" onClick={handleClick}>
          (
        </button>
        <button className="bg-gray-700 text-white p-4 rounded-md" name=")" onClick={handleClick}>
          )
        </button>
        <button
          className="bg-gray-700 text-white p-4 rounded-md col-span-2"
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
