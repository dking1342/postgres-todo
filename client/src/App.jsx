import React, { } from 'react'
import InputTodo from './components/InputTodo'
import Todos from './components/Todos';
import { AppProvider } from './context/store';



const App = () => {

  return (
    <AppProvider>
      <main className="container">
        <InputTodo />
        <Todos />
      </main>
    </AppProvider>
  )
}

export default App
