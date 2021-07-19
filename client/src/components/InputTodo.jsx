import React, {  } from 'react'
import { Form, useForm } from './useForm';

const InputTodo = ({fetchData,setFetchData}) => {

    const callback = async () => {
        setFetchData({
            ...fetchData,
            url:'http://localhost:5000/api/pg/todo',
            method:'POST',
            body:{ description:values.description }
        })
    }

    let { 
        onChange, 
        onSubmit, 
        values,
        regex 
    } = useForm(callback,{description:''});

    return (
        <>
            <h1 className="text-center mt-5">PERN Todo List</h1>
            <Form className="d-flex mt-5" onSubmit={onSubmit}>
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
                    disabled={regex.test(Object.values(values)) === true || Object.values(values).includes('') === true ? true : false} 
                >
                    Add
                </button>
            </Form>
        </>
    )
}

export default InputTodo
