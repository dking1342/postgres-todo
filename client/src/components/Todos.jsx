import React, { useContext } from 'react'
import { AppContext } from '../context/store';
import EditTodo from './EditTodo';

const Todos = () => {
    let { fetchData, setFetchData, state: {loading,error,todos:list} } = useContext(AppContext);

    const handleDelete = (id)=> {
        setFetchData({
            ...fetchData,
            url: `http://localhost:5000/api/pg/todo/${id}`,
            method:'DELETE',
            body:{}
        });
    }

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
    if(list && list.length > 0){
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
                                list && list.map(item => (
                                    <tr key={item.todo_id}>
                                        <td>{item.description}</td>
                                        <td>
                                            <EditTodo 
                                                id={item.todo_id}
                                                fetchData={fetchData}
                                                setFetchData={setFetchData}
                                            />
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>handleDelete(item.todo_id)}>
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

export default Todos
