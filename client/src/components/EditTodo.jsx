import React, { } from 'react'
import { useForm, Form } from './useForm';

const EditTodo = ({fetchData,setFetchData,id}) => {

    const callback = async () => {
        setFetchData({
            ...fetchData,
            url: `http://localhost:5000/api/pg/todo/${id}`,
            method:'PUT',
            body:{ description:values.description }
        });
    }   
    
    let {
        onChange,
        onSubmit,
        values,
        regex
    } = useForm(callback,{description:''});

    return (
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Edit
            </button>
            
            
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button type="button" className="close btn" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <Form className="d-flex">
                                <input 
                                    type="text" 
                                    id="text" 
                                    name="description" 
                                    className="form-control" 
                                    value={values.description} 
                                    onChange={onChange} 
                                />
                                <button 
                                    className="btn btn-success" 
                                    data-dismiss="modal" 
                                    disabled={regex.test(Object.values(values)) === true || Object.values(values).includes('') === true ? true : false}
                                    onClick={onSubmit}
                                >
                                    Edit
                                </button>
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>            
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTodo
