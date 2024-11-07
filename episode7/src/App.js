import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [catfact, setCatFact] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [excuse, setExcuse] = useState("");
  
  // useEffect(()=>{
  //   fetch('https://catfact.ninja/fact')
  //   .then((response) => response.json())
  //   .then((data)=>{
  //     setCatFact(data.fact);
  //   })
  // },[])

  const getCatFact =() =>{
    Axios.get('https://catfact.ninja/fact').then((res)=>{
      setCatFact(res.data.fact);
    })
  };

  useEffect(()=>{
    getCatFact();
  },[]);

  const predictAge = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      console.log(res.data);
      setAge(res.data.age);
    })
  };

  const getExcuse = (category) =>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((res)=>{
      setExcuse(res.data[0].excuse);
    })
  };

  return (
    <div className="App">

      <div>
        <button onClick={getCatFact}>
          Generate Cat Fact!
        </button>
        <h1>{catfact}</h1>
      </div>

      <br />

      <div>
        <label>Enter Name:  </label>
        <input onChange={(event)=>setName(event.target.value)}/>
        <br /><br />
        <button onClick={predictAge}>Predict Age</button>
        <h1>Age is {age}</h1>
      </div>

      <br />

      <div>
        <h1>Pick a category</h1>
        <br /><br />
        <button onClick={()=>getExcuse('party')}>Party</button><br /><br />
        <button onClick={()=>getExcuse('family')}>Family</button><br /><br />
        <button onClick={()=>getExcuse('office')}>Office</button><br /><br />
        <h1>{excuse}</h1>
      </div>
    </div>
  );
}

export default App;
