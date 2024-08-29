import React, { useRef, useState } from 'react';

function CalculatorFunc() {
  const number1Ref = useRef();
  const number2Ref = useRef();
  const [result, setResult] = useState({ sum: '', difference: '', product: '', remainder: '' });

  const calculate = () => {
    const num1 = parseFloat(number1Ref.current.value);
    const num2 = parseFloat(number2Ref.current.value);

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
            <input type="number" ref={number1Ref} placeholder="Enter Number 1" />
       </div>
       <div>
            <input type="number" ref={number2Ref} placeholder="Enter Number 2" />
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

export default CalculatorFunc;
