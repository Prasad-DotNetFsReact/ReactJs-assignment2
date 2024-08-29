import React, { Component } from "react";
//import '../components/css/calculator.css';
export default class CalculatorClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      sum: '',
      difference: '',
      product: '',
      remainder: '',
    };

 
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculate() {
    const { number1, number2 } = this.state;
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    this.setState({
      sum: num1 + num2,
      difference: num1 - num2,
      product: num1 * num2,
      remainder: num1 % num2,
    });
  }

  render() {
    return (
      <>
      <div>
            <div>
                <input
                  type="number"
                  name="number1"
                  value={this.state.number1}
                  onChange={this.handleChange}
                  placeholder="Enter Number1"
                />
            </div>
            <div>
               <input
                 type="number"
                 name="number2"
                 value={this.state.number2}
                 onChange={this.handleChange}
                 placeholder="Enter Number2"
               />
            </div>
            <div>
                <button onClick={this.calculate}>Calculate</button>
            </div>
            <div>
                <p>Sum: {this.state.sum}</p>
                <p>Difference: {this.state.difference}</p>
                <p>Product: {this.state.product}</p>
                <p>Remainder: {this.state.remainder}</p>
            </div>
        </div>
      </> 
    );
  }
}
