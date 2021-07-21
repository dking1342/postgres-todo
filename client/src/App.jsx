import { ApolloProvider } from '@apollo/client';
import React, { } from 'react'
import InputTodo from './components/InputTodo'
import Todos from './components/Todos';
import { AppProvider } from './context/store';



const App = () => {

  return (
    <ApolloProvider>
      <AppProvider>
        <main className="container">
          <InputTodo />
          <Todos />
        </main>
      </AppProvider>
    </ApolloProvider>
  )
}

export default App
