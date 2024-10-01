import './App.css';
import {User} from './User';

function App() {
  const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 40 },
  ];

  return (
  <div className="App"> 
    {users.map((user, key) => {
      return <User name={user.name} age={user.age} /> ;
    })}
  </div>
  );
}



export default App;