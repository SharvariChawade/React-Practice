import React, { useState } from 'react';
import './App.css';
import { Person , Country} from './Person';

function App() {

  const [name,setName] = useState<string>("");
  
  const getAge = (name:string):number => {
    return 99;
  }
  
  return (
    <div className="App">
      <Person 
        name="Pedro"
        age={21}
        isMarried={false}
        friends={["a","b","c"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
