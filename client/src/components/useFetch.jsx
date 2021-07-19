import { useCallback, useEffect, useState } from 'react';

export const useFetch = (
    url,
    method='GET',
    body='',
    immediate=true
) => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [data, setData] = useState([]);

    const fetchData = useCallback(async()=>{
        setLoading(true);
        let response;
        try {
            if(method === 'GET'){
                response = await fetch(url);
            } else {
                response = await fetch(url,{
                  method,
                  headers:{
                      "Content-Type":"application/json"
                  },
                  body: JSON.stringify(body),        
                });
            }
            const data = await response.json();
            data && setData(data.payload);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    },[url,method,body])

    useEffect(()=>{
        if(immediate) fetchData();
    },[immediate,fetchData]);

    return{
        loading,
        error,
        data,
        fetchData
    }
}

// Options:
// fetchFn (required): the function to execute to get data
// loadOnMount (opt): load the data on component mount
// clearDataOnLoad (opt): clear old data on new load regardless of success state
export const useAsyncData = ({
    loadOnMount = false,
    clearDataOnLoad = false,
    fetchFn = null,
  } = {}) => {
    // Our data fetching state variables
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
  
    // A function to handle all the data fetching logic
    const loadData = useCallback(async (event) => {
      setIsLoading(true);
      setError();
      if (clearDataOnLoad === true) setData();
  
      try {
        const resp = await fetchFn(event);
        let d = await resp.json();
        let sorted = d.payload.sort((a,b)=> b.todo_id - a.todo_id);
        setData(sorted);
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    },[clearDataOnLoad,fetchFn]);
  
    // 'onMount'
    // maybe load the data if required
    useEffect(() => {
      if (loadOnMount && fetchFn !== null) loadData();
    }, [fetchFn,loadData,loadOnMount]);
  
    // Return the state and the load function to the component
    return { data, isLoading, error, loadData };
  };
