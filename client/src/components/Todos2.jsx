import { useQuery } from '@apollo/client';
import React from 'react';
import CONSTANTS from '../gql/constants';
import { query } from '../gql/query';
import EditTodo2 from './EditTodo2';

const Todos2 = () => {
    let { loading, error, data } = useQuery(query(CONSTANTS.GET_TODOS));

    if(loading){
        return(
            <div className="text-center">
                Loading...
            </div>
        )
    } 
    if(error){
        return(
            <div>
                There was an error getting the list
            </div>
        )
    } 
    if(data && data.getTodos){
            return(
                <div>
                    <table className="table mt-5 text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.getTodos && data.getTodos.map(item => (
                                    <tr key={item.todo_id}>
                                        <td>{item.description}</td>
                                        <td>
                                            <EditTodo2 
                                                id={item.todo_id}
                                            />
                                        </td>
                                        <td>
                                            <button 
                                                className="btn btn-danger" 
                                                // onClick={()=>handleDelete(item.todo_id)}
                                            >
                                                Delete
                                            </button> 
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )
    } else {
        return(
            <>
                <h1 className="text-center mt-5 text-success">No Todos... all finished</h1>
            </>
        )
    }


}

export default Todos2
