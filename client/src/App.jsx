import React, { useEffect, useState } from 'react'
import InputTodo from './components/InputTodo'
import Todos from './components/Todos';

const App = () => {
  const [list, setList] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const [isSubmit,setIsSubmit]=useState(true);

  const getList = async() => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/pg/todos');
      const data = await response.json();
      data && setList(data.payload);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(isSubmit){
      getList();
      setIsSubmit(false);
    }
  },[isSubmit]);

  return (
    <main className="container">
      <InputTodo 
        setList={setList} 
        setIsSubmit={setIsSubmit}  
      />
      <Todos 
        loading={loading}
        error={error}
        list={list}
        setIsSubmit={setIsSubmit}
      />
    </main>
  )
}

export default App
