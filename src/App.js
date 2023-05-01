import { useState } from 'react';
import CardsList from './components/CardsList';
import Navbar from './components/Navbar';
import data from './data/data.json'
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'white')

  const handleToggle = () => {
    if (theme === 'white') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('white')
      localStorage.setItem('theme', 'white')
    }
  }

  return (
    <div className="App">
      <Navbar toggle={handleToggle} style={theme} />
      <CardsList data={data.countries} style={theme} />
    </div>
  );
}

export default App;
