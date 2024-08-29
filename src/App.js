import logo from './logo.svg';
import './App.css';
import '../src/components/css/calculator.css'
import CalculatorClass from './components/controlledComp/CalculatorClass';
import CalculatorFun from './components/controlledComp/CalculatorFun';
import CalculatorFunc from './components/uncontrolledComp/CalculatorFunc';
import RagistrationClass from './components/controlledComp/RagistrationClass';
import RegistrationFunction from './components/controlledComp/RegistrationFunction';
import LogIn from './components/refpandpass/LogIn';
function App() {
  return (
    <div className="App">
        {/* <CalculatorClass />
        <CalculatorFun /> */}
        {/* <CalculatorFunc /> */}
        {/* <RagistrationClass /> */}
        {/* <RegistrationFunction /> */}
        <LogIn />
    </div>
  );
}

export default App;
