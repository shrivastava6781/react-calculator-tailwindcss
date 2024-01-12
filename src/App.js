
import React, { useState } from 'react';
// import './tailwind.css'; // Import your Tailwind CSS file

const App = () => {
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
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 w-96 h-[540px] flex items-center justify-center flex-col gap-4 rounded-xl">
      <input
        type="text"
        value={result}
        className="bg-slate-700 w-80 h-[45px] rounded-lg border border-white p-2 text-white text-lg font-medium "
        readOnly
      />
      <div className="w-80 h-[430px] bg-slate-700 rounded-lg flex item-center justify-center flex-wrap p-3 gap-2">
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium " onClick={clear} name="AC">
          AC
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium " name="/" onClick={handleClick}>
          /
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="*" onClick={handleClick}>
          x
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="-" onClick={handleClick}>
          -
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="7" onClick={handleClick}>
          7
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="8" onClick={handleClick}>
          8
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="9" onClick={handleClick}>
          9
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="+" onClick={handleClick}>
          +
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="4" onClick={handleClick}>
          4
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="5" onClick={handleClick}>
          5
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="6" onClick={handleClick}>
          6
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="1" onClick={handleClick}>
          1
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="2" onClick={handleClick}>
          2
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="3" onClick={handleClick}>
          3
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="0" onClick={handleClick}>
          0
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="00" onClick={handleClick}>
          00
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="." onClick={handleClick}>
          .
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name="(" onClick={handleClick}>
          (
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" name=")" onClick={handleClick}>
          )
        </button>
        <button className="flex items-center justify-center bg-slate-400 w-16 h-16 rounded-lg text drop-shadow-sm text-white text-lg font-medium" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;