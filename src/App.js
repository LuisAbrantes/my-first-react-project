import './App.css';
import { useState } from 'react';

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button onClick={() => 
        // {alert("Jesus eh Hey!");}
        setShowText(!showText)
      }> Show/Hide </button>
      {showText === true && <h1>JESUS</h1>}
    </div>
  );
}

export default App;