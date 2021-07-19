import React, { } from 'react'
import { useForm, Form } from './useForm';

const EditTodo = ({setIsSubmit,id}) => {

    const callback = async (id) => {
        console.log('hello',id);
        try {
            const body = { description:values.description };
            const response = await fetch(`http://localhost:5000/api/pg/todo/${id}`,{
                method:'PUT',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(body),
            });
            const data = await response.json();
            console.log(data);
            data && setIsSubmit(true);
        } catch (error) {
            console.error(error.message);
        }
    }   
    
    let {
        onChange,
        onSubmit,
        values,
        regex
    } = useForm(callback,{description:''},`${id}`);
    console.log(onSubmit)

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
                            <Form className="d-flex" onSubmit={onSubmit} id={id}>
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
