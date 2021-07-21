import { useMutation } from '@apollo/client';
import React from 'react';
import CONSTANTS from '../gql/constants';
import { mutation } from '../gql/mutation';
import { query } from '../gql/query';
import { Form, useForm } from './useForm';

const InputTodo2 = () => {

    let { 
        onChange, 
        onSubmit, 
        values,
        regex 
    } = useForm(pTodo,{description:''});

    const [postTodo] = useMutation(mutation(CONSTANTS.POST_TODO_ITEM),{
        variables:{
            description:values.description
        },
        update(proxy,result){
            let { postTodo } = result.data;
            let data = proxy.readQuery({
                query:query(CONSTANTS.GET_TODOS)
            });
            proxy.writeQuery({
                query:query(CONSTANTS.GET_TODOS),
                data:{
                    ...data,
                    postTodo
                }
            })
        },refetchQueries:[
            {query:query(CONSTANTS.GET_TODOS)}
        ]
    })

    function pTodo(){
        postTodo();
    }

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

export default InputTodo2
