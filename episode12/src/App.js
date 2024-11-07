import { useToggle } from './useToggle'
import { useCounter } from './useCounter'
import {useState} from 'react'
import './App.css';

function App() {

  const [input, setInput] = useState(0);
  const [isVisible, toggle] = useToggle(true);
  const [counter, increase, decrease, reset, set] = useCounter(input);

  return (
    <div className="App">
      <div>
        <input type = "number" onChange={(event)=>{setInput(event.target.value)}} placeholder="Enter a number"/>
        <button onClick={()=>set(input)}>Submit</button>
        <h1>{counter}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
      <button onClick={toggle} >{isVisible?"Hide":"Show"}</button>
      {isVisible && <h1>HI I AM SHARVARI</h1>}
    </div>
  );
}

export default App;
