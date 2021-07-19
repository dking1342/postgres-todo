import React, { useState } from 'react';

export const useForm = (callback,initialState = {},args = []) => {
    const [values, setValues] = useState(initialState);
    console.log('args',args)

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const resetForm = () => {
        setValues(initialState);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        callback(args);
        resetForm();
    }

    const regex = /^[\s].*$/;


    return {
        onChange,
        resetForm,
        onSubmit,
        values,
        regex
    }
}


export const Form = ({onSubmit,children,...rest}) => {
    console.log('rest',rest,rest.id)

    return(
        <form onSubmit={onSubmit} {...rest}>
            {children}
        </form>
    )
}