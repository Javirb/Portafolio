import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import LandingPage from './pages/LandingPage'
import Newsletter from './pages/Newsletter'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<LandingPage/>} />  
        <Route path='/newsletter' element={<Newsletter/>} />  
        <Route path='/contact' element={<Contact/>} />  

      </Routes>
    </Router>

  );
}

export default App;