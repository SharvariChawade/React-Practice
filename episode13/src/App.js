import './App.css';
import { Person } from './Person';
//tutorial on proptypes, instead of proptype we use typescript
function App() {
  return (
    <div className="App">
      <Person 
        name="Sharvari"
        email="chawadesharvari14@gmail.com"
        age={21}
        isMarried={false}
        friends={['himu','timu','himeshwar']}
      />
    </div>
  );
}

export default App;
