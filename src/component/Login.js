import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase';
import './Login.css'

const Login = ({setIsAuth}) => {

  const loginInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
    })
  };

  return (
  <body >    
  <div className="container">
  <header>
    <h1>Dev & Journey</h1>
  </header>
  <main>
    <div className="circle">
      <p>ログイン</p>
      <button className='login-button' onClick={loginInWithGoogle}> Start</button>
    </div>
  </main>
 </div>
 </body>
  )
}

export default Login;