import './App.css';

function App() {
  return (
  <div className="App"> 
    <Job salary={1000} position="Frontend Developer" company="Amazon"/>
    <Job salary={1080} position="Junior SDE" company="Google"/>
    <Job salary={1900} position="Senior SDE" company="Apple"/>
  </div>
  );
}

const Job = (props) => {
  return (
    <div> 
      <h1>{props.company}</h1>
      <h2>{props.position}</h2>
      <h3>{props.salary}</h3>
    </div>
  )
};


export default App;
