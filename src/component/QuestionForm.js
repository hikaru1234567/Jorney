import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './QuestionForm.css';

const QuestionForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      await addDoc(collection(db, "questions"), {
        title: title,
        content: content,
        createdAt: new Date()
      });
      setTitle(''); 
      setContent(''); 
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    
  };

  return (
    <div className='formContainer'>
      <div className='formHeader'>
        <h1>質問フォーム</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='inputGroup'>
          <label htmlFor="title">タイトル:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <div className='inputGroup'>
          <label htmlFor="content">内容:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        
        <div className='buttonGroup'>
          <button type="submit" >質問を投稿</button>
        </div>
      </form>
    </div>
  );
}

export default QuestionForm;