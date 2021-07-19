import React, { useState } from 'react'
import InputTodo from './components/InputTodo'
import Todos from './components/Todos';



const App = () => {
  const [fetchData, setFetchData]=useState({
      url:'http://localhost:5000/api/pg/todos',
      method:'GET',
      body:null
  });

  return (
    <main className="container">
      <InputTodo 
        fetchData={fetchData}
        setFetchData={setFetchData}
      />
      <Todos
        fetchData={fetchData}
        setFetchData={setFetchData}
      />
    </main>
  )
}

export default App
