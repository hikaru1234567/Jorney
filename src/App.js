import './App.css';
import Home from './component/Home'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Work from './component/Work';
import Question from './component/Question';
import Project from './component/Project';
import Profile from './component/Profile';
import Navbar from './component/Navbar';
import { useState } from 'react';
import Login from './component/Login';

function App() {
  const [isAuth, setIsAuth]=useState(false);

  return (
    <>
    {isAuth ?    (<BrowserRouter> 
  <Navbar setIsAuth={setIsAuth}/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Work" element={<Work />} />
    <Route path="/Question" element={<Question />} />
    <Route path="/Project" element={<Project />} />
    <Route path="/Profile" element={<Profile />} />
  </Routes>
</BrowserRouter>) :

(<Login setIsAuth={setIsAuth}/>)}
   </>
  );  
};


export default App;
