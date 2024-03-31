import React from "react";

const DietPlan = ({ value }) => {
  return (
    <div className="container">
      <div className="box">
        <h1>Diet Plan</h1>
        <p>BMI Result: {value}</p>
        {/* Implement the logic to display the diet plan based on the BMI result */}
      </div>
    </div>
  );
};

export default DietPlan;
