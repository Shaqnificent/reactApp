import './App.css';
import {useState, useEffect} from 'react';


const App = () =>  {
  const Person = (props) => {
    return (
      <>
        <h1>Name: {props.name} {props.lname}</h1>
        <h2>Age: {props.age}</h2>
      
      </>
    )
  }

  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    alert("Your Score: " + counter);

  }, [counter]);

  return (
    <div className="App">
        <Person name='Kevin' lname='Brown' age={20}/>
        <button onClick={() => setCounter((prevCount)=> prevCount-1)}>-</button>
        <h3>Score: {counter}</h3>
        <button onClick={() => setCounter((prevCount)=> prevCount+1)}>+</button>
        
    </div>
  );
}

export default App;
