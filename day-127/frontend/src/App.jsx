import { useState } from "react";
import "./App.css";
import FacialExpression from './components/FacialExpression';
import MoodSongs from "./components/MoodSongs";

function App() {
  return (
    <div className="main-wrapper">
      <FacialExpression/>
      <MoodSongs/>
    </div>
  );
}

export default App;
