import React from 'react';
import { signOut } from "firebase/auth";
import { auth, } from '../firebase';
import './Logout.css'

const Logout= ({setIsAuth}) => {

  const logout=()=>{
    signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
    })
  };

  return (
     <button className='logout-button' onClick={logout}>ログアウト</button>
  )
}

export default Logout;