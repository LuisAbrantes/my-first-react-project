import './App.css';

function App() {
  const name = <h1>Luis</h1>;
  const age = <h2>17</h2>;
  const email = <h2>luis.hsa@gmail.com</h2>;


  return (<div className="App"> 
    <User />
  </div>
  );
}

const User = () => {
  return (
    <div>
      <h1>Luis</h1>
      <h2>17</h2>
      <h2>luis.hsa@gmail.com</h2>
    </div>
  );
};

export default App;
