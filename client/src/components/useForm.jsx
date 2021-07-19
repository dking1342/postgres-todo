import React, { useState } from 'react';



export const useForm = (callback,initialState = {}) => {
    const [values, setValues] = useState(initialState);

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
        callback();
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

    return(
        <form onSubmit={onSubmit} {...rest}>
            {children}
        </form>
    )
}