import gql from 'graphql-tag';
import CONSTANTS from './constants';

export const query = (type) => {
    switch (type) {
        case CONSTANTS.GET_TODOS:
            return gql`
                query getTodos{
                    getTodos{
                        todo_id
                        description
                    }
                }
            `;
        case CONSTANTS.GET_TODO_ITEM:
            return gql`
                query getTodo($id:ID!){
                    getTodo(id:$id){
                        todo_id
                        description
                    }
                }
            `;
    
        default:
            return;
    }
}  