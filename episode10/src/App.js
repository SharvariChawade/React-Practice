import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './pages/Home';
import { Contact } from './pages/Conatct';
import { Profile } from './pages/Profile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const client = new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus: false,
    }
  }});

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="*" element={<h1>Page not found</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
