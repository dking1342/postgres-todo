import React, { createContext, useEffect, useReducer, useState } from 'react';
import { callback, useFetch } from '../components/useFetch';
import AppReducer from './AppReducer';

const initialState = {
    todos: [],
    loading: false,
    error: null
}

export const AppContext = createContext(initialState);

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);
    const [fetchData, setFetchData]=useState({
        url:'http://localhost:5000/api/pg/todos',
        method:'GET',
        body:null
    });
    let { url, method, body } = fetchData;
    let { isLoading:loading,error,data:todos,loadData} = useFetch({
        fetchFn:()=> callback(url,method,body)
    });

    useEffect(()=>{
        loadData();
    },[fetchData])

    // actions
    // loading
    useEffect(()=>{
        dispatch({
            type:'LOADING',
            payload:loading
        })
    },[loading]);
    // error
    useEffect(()=>{
        dispatch({
            type:'ERROR',
            payload:error
        })
    },[error]);
    // todos
    useEffect(()=>{
        dispatch({
            type:'GET',
            payload:todos
        })
    },[todos])

    return(
        <AppContext.Provider
            value={{
                state,
                fetchData,
                setFetchData,

            }}
        >
            {children}
        </AppContext.Provider>
    )

}