import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

// pages
import Home from "./pages/Home"
import Timer from "./pages/Timer"
import Schedule from './pages/Schedule';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/timer" element={<Timer/>}></Route>
          <Route path="/schedule" element={<Schedule/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
