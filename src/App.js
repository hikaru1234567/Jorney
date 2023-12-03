import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './component/Home'; 
import Work from './component/Work';
import Question from './component/Question';
import Project from './component/Project';
import Profile from './component/Profile';
import Navbar from './component/Navbar';
import Login from './component/Login';
import QuestionForm from './component/QuestionForm';
import UserCreateForm from './component/UserCreateForm';

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
    <Route path="/question-form" element={<QuestionForm />} />
    <Route path="/UserCreateForm" element={<UserCreateForm />} />
  </Routes>
</BrowserRouter>) :

(<Login setIsAuth={setIsAuth}/>)}
   </>
  );  
};


export default App;
