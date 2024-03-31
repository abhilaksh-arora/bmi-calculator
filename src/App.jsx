import React from "react";
import Calculator from "./components/Calculator";
import { Routes, Route } from "react-router-dom";
import DietPlan from "./components/DietPlan";
import Main from "./components/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/diet-plan" element={<DietPlan />} /> */}
    </Routes>
  );
};

export default App;
