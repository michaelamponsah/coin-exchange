import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
