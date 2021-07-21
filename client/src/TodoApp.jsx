import React from 'react';
import Todos2 from './components/Todos2';
import ApolloProvider from './config/Apollo';

const TodoApp = () => {
    return (
        <ApolloProvider>
            <main className="container">
                <Todos2 />
            </main>
        </ApolloProvider>
    )
}

export default TodoApp
