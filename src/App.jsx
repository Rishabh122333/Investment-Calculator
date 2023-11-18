import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/userInput";
import Result from "./components/Result";

function App() {
  const [calculate,setCalculate] =useState(false);
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 500,
    expectedReturn: 5.5,
    duration: 1,
  });
  const validInput = userInput.duration > 0;
  function handleChange(inputIndetifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndetifier]: +newValue,
      };
    });
  }
  function handleClick(){
    setCalculate(true)
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} click={handleClick}/>
      {calculate && !validInput && <p className="center">Enter a valid Duration</p>}
      {calculate && validInput && <Result userInput={userInput}/>}
    </>
  );
}

export default App;
