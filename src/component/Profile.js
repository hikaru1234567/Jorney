import React, { useState, useEffect } from 'react';
import { db } from  '../firebase';
import { doc, getDoc  } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import './Profile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import {faGithub } from "@fortawesome/free-brands-svg-icons";


const Profile = () => {
  const auth = getAuth();
  const users = auth.currentUser;
  const uid=users.uid;

  const navigate=useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, 'users', uid); // 'userId'はユーザー固有のID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) { //データが存在するか確認
        setUser(docSnap.data());
      } else {
        console.log("No such document!");
        navigate('/UserCreateForm');
      }


      
    };

    fetchUserData();
  }, []);


  if (!user) {
    return <div>Loading...</div>;
  }

    return (
      <div className="profile-form-container">
        <form className="profile-form">
         <input  className="avatar-placeholder" type="file" id="fileInput" />
          <div className="group">
            <a className="icon-twitter"><FontAwesomeIcon className="menu-icon"   icon={faSquareXTwitter}  /></a>
            <h1>{user.name}</h1>
          </div>
          <div className="group">
            <a className="icon-github"><FontAwesomeIcon className="menu-icon"   icon={faGithub}  /></a>
            <h1>{user.name}</h1>
          </div>
          <div className="group">
            <i className="icon-lock"></i>
            <p>{user.introduce}</p>
          </div>
       
          <button type="submit">C</button>
        </form>
      </div>
    );
  };
  

export default Profile;
