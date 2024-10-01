import './App.css';

function App() {
  const names = ["John", "Jane", "Jim"];
  // const users = [
  //   { name: "John", age: 30 },
  //   { name: "Jane", age: 25 },
  //   { name: "Jim", age: 40 },
  // ];

  return (
  <div className="App"> 
    {names.map((name, key) => {
      return <h1 key={key}> {name} </h1>;
    })}
  </div>
  );
}

export default App;