import gql from 'graphql-tag';
import CONSTANTS from './constants';

export const mutation = (type) => {
    switch (type) {
        case CONSTANTS.POST_TODO_ITEM:
            return gql`
                mutation postTodo($postTodoDescription: String!){
                    postTodo(description: $postTodoDescription) {
                        todo_id
                        description
                    }
                }
            `;
        case CONSTANTS.UPDATE_TODO_ITEM:
            return gql`
                mutation updateTodo($id:ID!,$description:String!){
                    updateTodo(id:$id,description:$description){
                        todo_id
                        description
                    }
                }                
            `;    
        default:
            return;
    }
}