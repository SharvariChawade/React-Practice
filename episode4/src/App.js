// useState hooks
import './App.css';
import {useState} from 'react';

function App() {
  // increase age value
  const [age,setAge] = useState(0);
  const [inputValue,setInputValue] = useState("");
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState('black');
  const [c,setC] = useState(0);
  const [count,setCount] = useState(0);

  const incAge = () =>{
    setAge(age + 1);
  };

  //Get live text
  const handleInputChange = (event) =>{
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const alterText = () =>{
    setShowText(!showText);
  }

  const changeColor = () =>{
    const colours = ['red','blue','yellow','green','cyan','brown'];
    setTextColor(colours[c%6]);
    console.log(colours[c%6],c)
    setC(c+1);
  }

  const increaseCount = () =>{
    setCount(count+1);
  }

  const decreaseCount = () =>{
    setCount(count-1);
  }

  const zeroCount = () =>{
    setCount(0);
  }

  return (
    <div className="App">
      <div>
        <div><h1>  {age} </h1></div>
        <div><h1><button onClick={incAge}>Increase</button></h1></div>
      </div>
      <div>
        <input type="text" onChange={handleInputChange} />
        <div><h1>{inputValue}</h1></div>
      </div>
      <div>
        <div><button onClick={alterText}>Show/hide text</button></div>
        {showText && <div><h1>HI I AM SHARVARI</h1></div>}
      </div>
      <div>
        <div><button onClick={changeColor}>Change text color</button></div>
        <div><h1 style={{color:textColor}}>MY COLOR WILL CHANGE IF U CLICK THE BUTTON</h1></div>
      </div>
      <div>
        <div><h1>{count}</h1></div>
        <div>
          <button onClick={increaseCount}>Increase</button>
          <button onClick={decreaseCount}>Decrease</button>
          <button onClick={zeroCount}>Make zero</button>
        </div>
      </div>
    </div>
  );
}

export default App;
