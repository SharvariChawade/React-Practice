import './App.css';
import UserObj from './UserObj.js';
import { Fruit } from './Fruit';

//component is js function that returns jsx/UI
function App() {

  const age = 7;
  const isGreen = true;

  const names = ['Apple','Kivi','Pear']
  const users = [
    {name:"Shari",age:21},
    {name:"Himu",age:21}
  ];
  const fruits = [
    {name:'Apple',quantity:5},
    {name:'Chickoo',quantity:7}
  ];

  const planets = [
    {name:"Earth", isGas:false},
    {name:"Saturn", isGas:true},
    {name:"mars", isGas:false},
    {name:"Uranus", isGas:true}
  ];

  return (<div className='App'>
    {/* Excercise to diplay gas planets */}
    {
      planets.map((planet,key)=>{
        if (planet.isGas == true) return (<h1>{planet.name}</h1>)
      })
    }

    {/* This is conditional rendering */}
    {age >=18 ? <h1>Overage</h1> : <h1>UnderAge</h1>}
    <h1 style={{color:isGreen == false ? "red" : "green"}}>This has colour</h1>

    {/* Lists in react */}
    {
      names.map((name,key) => {
        return <h1>{name},{key}</h1>
      })
    }

    {/* return objects stored in list */}
    {
      users.map((user,key)=>{
        return <div>Name is {user.name}, Age is {user.age}</div>
        })
    }

    {/* Returning object stored in list using components */}
    {
      users.map((user,key)=>{
        return <UserObj name={user.name} age={user.age}/>
      })
    }
    {
      fruits.map((fruit,key) => {
        return <Fruit name={fruit.name} quantity={fruit.quantity}/>
      })
    }

    <User name = "sharvari" age = {21}></User>
    <User name = "himanshu" age = {21} />
    <Job company="Amazon" role="Junior SDE" salary="100K" />
    <Job company="Google" role="Senior SDE" salary="120K" />
    </div>
  );
}


// props is the attributes that you can pass to a component

const User =(props)=>{
  return(
    <div>
      <h1>Name is {props.name}</h1>
      <h1>Age is {props.age}</h1>
    </div>
  )
};

const Job = (jprops)=>{
  return(
    <div className='job'>
      <h1>{jprops.company} is hiring for the role of {jprops.role} with CTC {jprops.salary} LPA.</h1>
    </div>
  )
};



// this is just a JS function
const getName = () => {
  return "Pedro";
};
// this returns a html tag hence called a JS component. Component start from capital letter only!
const GetNameComponent = () => {
  return <h1>Pedro</h1>;
};


export default App;