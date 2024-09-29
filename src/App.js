import './App.css';

function App() {
  const name = <h1>Luis</h1>;
  const age = <h2>17</h2>;
  const email = <h2>luis.hsa@gmail.com</h2>;


  return (<div className="App"> 
    <User name="Luis" age={17} email="luis.hsa@gmail.com"/>
  </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};

export default App;
