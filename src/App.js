
import './App.css';
import Home from './Home';
import User from './Users';
import Admin from './Admin';
import Page1 from './Page1';
import Page from './Page';


import { BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios'
axios.defaults.baseURL = "https://efe4-16-171-250-212.ngrok-free.app";
axios.defaults.headers = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "69420"
};

function App() {
  return (
   <BrowserRouter>
    
      <Routes>
        <Route path="/user" element={<User/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/Page1" element={<Page1/>}/>
        <Route path="/Page" element={<Page/>}/>
        
       
      </Routes>
    
   </BrowserRouter>
  );
}

export default App;
