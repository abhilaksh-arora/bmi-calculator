import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DietPlan from "./DietPlan";

const Calculator = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    if (!age || !height || !weight || !gender) {
      alert("All fields are required!");
      return;
    }

    const bmi =
      Number(weight) / (((Number(height) / 100) * Number(height)) / 100);

    let result = "";
    if (bmi < 18.5) {
      result = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = "Healthy";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
      result = "Obese";
    } else {
      result = "Extremely obese";
    }

    setBmiResult({ value: bmi.toFixed(2), comment: result });
  };


  return (
    <div className="container">
      <div className="box">
        <h1>BMI Calculator</h1>
        <div className="content">
          <div className="input">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="text-input"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="gender">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
          <div className="containerHW">
            <div className="inputH">
              <label htmlFor="height">Height(cm)</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div className="inputW">
              <label htmlFor="weight">Weight(kg)</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="calculate" onClick={calculateBMI}>
            Calculate BMI
          </button>
        </div>
        <div className="result">
          <p>Your BMI is</p>
          <div id="result">{bmiResult ? bmiResult.value : "00.00"}</div>
          <p className="comment">
            {bmiResult ? `You are ${bmiResult.comment}` : ""}
          </p>
          {/* {bmiResult && <DietPlan value={bmiResult.value} />} */}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
