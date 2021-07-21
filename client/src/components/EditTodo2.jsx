import { useMutation } from '@apollo/client';
import React from 'react';
import CONSTANTS from '../gql/constants';
import { mutation } from '../gql/mutation';
import { query } from '../gql/query';
import { useForm, Form } from './useForm';

const EditTodo2 = ({id:todoId}) => {
    let {
        onChange,
        onSubmit,
        values,
        regex
    } = useForm(uTodo,{description:''});

    const [updateTodo] = useMutation(mutation(CONSTANTS.UPDATE_TODO_ITEM),{
        variables:{
            id:todoId,
            description:values.description
        },
        update(proxy,result){
            let { updateTodo } = result.data;
            let data = proxy.readQuery({
                query:query(CONSTANTS.GET_TODOS)
            });
            proxy.writeQuery({
                query:query(CONSTANTS.GET_TODOS),
                data:{
                    ...data,
                    updateTodo
                }
            })
        },refetchQueries:[
            {query:query(CONSTANTS.GET_TODOS)}
        ]
    });
    

    function uTodo(){
        updateTodo();
    }
     
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

export default EditTodo2
