import { useMutation } from '@apollo/client'
import React from 'react'
import CONSTANTS from '../gql/constants'
import { mutation } from '../gql/mutation'
import { query } from '../gql/query'

const DeleteTodo2 = ({id}) => {
    const [handleClick] = useMutation(mutation(CONSTANTS.DELETE_TODO_ITEM),{
        variables:{
            id:id
        },
        update(proxy,result){
            let { deleteTodo } = result.data;
            let data = proxy.readQuery({
                query:query(CONSTANTS.GET_TODOS)
            });
            proxy.writeQuery({
                query:query(CONSTANTS.GET_TODOS),
                data:{
                    ...data,
                    deleteTodo
                }
            })
        },refetchQueries:[
            {query:query(CONSTANTS.GET_TODOS)}
        ]        
    })


    return (
        <button type="button" className="btn btn-danger" onClick={handleClick}>
            Delete
        </button>
    )
}

export default DeleteTodo2
