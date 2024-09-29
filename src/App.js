import './App.css';

function App() {
  const age = 17;
  const isGreen = true;

  return (
  <div className="App"> 
    {age>=18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
    {<h1 style={{color: isGreen ? 'green' : 'red'}}> If it is green it is ok. If it is red it is not ok.</h1>}

    {isGreen && <button>ENTER</button>}
  </div>
  );
}




export default App;
