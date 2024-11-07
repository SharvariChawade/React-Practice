import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {Menu} from './pages/Menu';
import {Contact} from './pages/Contact';
import {Profile} from './pages/Profile';
import {Navbar} from './Navbar';
import { useState, createContext } from 'react';
// chapter on state management to avoid propdrilling (it is the inefficient passing of props)

export const Appcontext = createContext();

function App() {

  const [username, setUsername] = useState("Sharvaric");

  return (
    <div className="App">
      <Appcontext.Provider value={{username,setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='*' element={<h1>page not found</h1>}/>
          </Routes>
        </Router>
      </Appcontext.Provider>
    </div>
  );
}

export default App;

