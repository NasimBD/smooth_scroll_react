//  npm i react-router-dom styled-components react-icons

import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/';
import { Signin } from './pages/signin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
