import './App.css';
import { useState } from 'react';

function App() {
  const [textColor, setTextColor] = useState("gray");

  return (
    <div className="App">
      <button 
        onClick={() => {
          setTextColor(textColor === "gray" ? "lightblue" : "gray");
        }}
      > 
        Show/Hide 
      </button>
      <h1 style={{color: textColor}}>JESUS</h1>
    </div>
  );
}

export default App;