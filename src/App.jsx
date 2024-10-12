import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello Vite + React + MUI!</h1>
      <Button variant="contained" color="primary">
        MUI Button
      </Button>
    </div>
  );
}

export default App;
