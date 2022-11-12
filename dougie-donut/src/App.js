import {Route, Routes} from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './Pages/Home';
import Borough from './Pages/Borough';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path = '/' element= {<Home/>}/>
        <Route path = '/borough'element = {<Borough/>}/>
      </Routes>
    </div>
  );
}

export default App;
