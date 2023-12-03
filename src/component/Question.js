import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot ,doc ,updateDoc ,where} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './Question.css';


const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [sort, setSort] = useState('createdAt');
  

  useEffect(() => {
    
  let  q;
  
    if (sort === 'solution' || sort === 'unsolved') {
      q = query(collection(db, "questions"), where('result', '==', sort), orderBy('createdAt', 'desc'));
    } else {
         q = query(collection(db, "questions"), orderBy(sort, "desc"));
      }
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(data);
    });

    return ()=> unsubscribe(); 
  }, [sort]);


   const completed=async (questionid)=>{
    const a= doc(db, 'questions', questionid);
    await updateDoc(a,{
    result:'solution'
    });


   }
  return (
      <div>
        <h1>Question</h1>
        <div className='search'>
        <div className='buttons'> 
          <button onClick={() => setSort('createdAt')}>日付</button>
          <button onClick={() => setSort('solution')}>解決済み</button>
          <button onClick={() => setSort('unsolved')}>未解決</button>
          </div>
          <Link to="/question-form" className='ask' >質問する</Link>
        </div>
        <div>
          {questions.map(question => (
            <div className='question'  key={question.id}>
              <div>{question.title}</div>
              <div>{question.content}</div>
              <div>{question.createdAt.toDate().toLocaleString()}</div>
              <div>{question.status}</div>
              <button onClick={()=>completed(question.id)}>完了</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  

export default Question;


