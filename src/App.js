import './App.css';
import {User} from './User';

function App() {
  const planets = [
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ];

  return <div className="App"> 
  {planets.map(
    (planet, key) => !planet.isGasPlanet && <h1> {planet.name} </h1> 
    // Remove "!" to display gas planets
  )}
  </div>;
}



export default App;