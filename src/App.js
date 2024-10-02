import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(1);

  const increaseAge = () => {
    setAge(age + 1);
  };

  return (<div className="App">
    {age}
    <button onClick={increaseAge}>increaseAge</button>
  </div>
  );
}

export default App;