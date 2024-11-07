import './App.css';
import Text from './Text.js'
import { useState } from 'react';

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button onClick={()=>setShowText(!showText)}>
        Show Text
      </button>
      <br />
      {showText && <Text />}
    </div>
  );
}

export default App;

// Component Lifecycle
// mounting
// updating
// unmounting