import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Counter from './Components/Counter';
import Error from './Components/Error';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
  
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Routes>
            {/* <Link></Link> */}
            <Route exact path="/" element={<Home/>}/>
            <Route path="counter" element={<Counter/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </div>
      </Router>
    );
}

export default App;
