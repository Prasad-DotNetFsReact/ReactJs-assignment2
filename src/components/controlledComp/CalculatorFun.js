import React, { useState } from 'react';
//import '../css/caculator.css';
function CalculatorFun() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState({ sum: '', difference: '', product: '', remainder: '' });

  const calculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    setResult({
      sum: num1 + num2,
      difference: num1 - num2,
      product: num1 * num2,
      remainder: num1 % num2,
    });
  };

  return (
    <div>
    <div>
        <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Enter Number 1"
        />
    </div>
    <div>
        <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Enter Number 2"
        />
    </div>
    <div>
        <button onClick={calculate}>Calculate</button>
    </div>
    <div>
      <p>Sum: {result.sum}</p>
      <p>Difference: {result.difference}</p>
      <p>Product: {result.product}</p>
      <p>Remainder: {result.remainder}</p>
    </div>
    </div>
  );
}

export default CalculatorFun;
