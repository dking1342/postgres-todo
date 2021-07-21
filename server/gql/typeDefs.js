import { gql } from "apollo-server-core";


const typeDefs = gql`
    type Todo{
        todo_id:ID!
        description:String!
    }
    type Query{
        getTodos:[Todo]
        getTodo(id:ID!):Todo
    }
    type Mutation{
        postTodo(description:String!):[Todo]!
        updateTodo(id:ID!,description:String!):[Todo]!
        deleteTodo(id:ID!):[Todo]!
        deleteTodos:[Todo]!
    }
`;

export default typeDefs;