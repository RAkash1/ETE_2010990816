import './App.css';
import Home from './component/pages/Home';
import Navbar from './component/layout/Navbar';
import About from './component/pages/about';
import Job from './component/pages/jobs';
import Sign from './component/pages/Sign';
import Signup from './component/pages/signup';
import Apply from './component/pages/apply';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/jobs" element={<Job/>}/>
        <Route path="/login" element={<Sign/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/apply" element={<Apply/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
