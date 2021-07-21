import React from 'react';
import InputTodo2 from './components/InputTodo2';
import Todos2 from './components/Todos2';
import ApolloProvider from './config/Apollo';

const TodoApp = () => {
    return (
        <ApolloProvider>
            <main className="container">
                <InputTodo2 />
                <Todos2 />
            </main>
        </ApolloProvider>
    )
}

export default TodoApp
