import React, { useState } from "react";
import "./App.css";

const AgeCalculator = () => {
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const enteredYear = parseInt(birthYear, 10);

    if (!isNaN(enteredYear)) {
      const calculatedAge = currentYear - enteredYear;
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };

  return (
    <div className="age-calculator">
      <label>Enter your birth year:</label>
      <input
        type="number"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
        placeholder="YYYY"
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <AgeCalculator />
    </div>
  );
};

export default App;
