import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserProfileCard from "./Componenets/UserProfileCard/UserProfileCard";

function App() {
  return (
    <div className="App">
      <UserProfileCard />
    </div>
  );
}

export default App;
