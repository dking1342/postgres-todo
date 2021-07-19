import React from 'react'
import EditTodo from './EditTodo';

const Todos = ({loading,error,list,setIsSubmit}) => {

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/pg/todo/${id}`,{
                method:'DELETE',
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const data = await response.json();
            data && setIsSubmit(true);
        } catch (error) {
            console.error(error.message);
        }
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
                                                setIsSumbit={setIsSubmit}
                                                id={item.todo_id}
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
            <h1 className="text-center mt-5 text-success">No Todos... all finished</h1>
        )
    }


}

export default Todos
