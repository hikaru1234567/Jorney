import React, { useState } from 'react';
import { db } from '../firebase'
import { collection, addDoc, setDoc, getDoc, doc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const UserCreateForm = () => {

  const auth = getAuth();
  const users = auth.currentUser;
  const uid=users.uid;

  const [userData, setUserData] = useState({ 
    name: '',
    email: '',
    photoURL:'',
});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e)  => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), userData);
      console.log('User data created');
    } catch (error) {
      console.error('Error creating user data:', error);
    }
  };


  const fetchAndCreateUser = async (userId) => {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
  
    if (!docSnap.exists()) {
      const newUser = {
        name: 'New User',
        introduce: '',
        photoURL:'',
      };
  
      await setDoc(docRef, newUser);
    } else {
      console.log('User already exists:', docSnap.data());
    }
  };
  
    fetchAndCreateUser(uid);
  
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </label>
      {/* 他の入力フィールドを追加... */}
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserCreateForm;
