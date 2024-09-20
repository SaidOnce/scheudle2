import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Unauthorized from './Unauthorized';
import Login from "./Login"
import Header from './Header';
import Home from "./Home"
import Registration from './Registration';
import ProtectedPage from './ProtectedPage';
import UserPanel from './UserPanel';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/registration" element={<Registration />} />  
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/adminpanel" element={<UserPanel />} />
      </Routes>
    </Router>
  );
}

export default App;