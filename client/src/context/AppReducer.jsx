
const AppReducer = (state,action) => {
    switch (action.type) {
        case 'LOADING':
            return{
                ...state,
                loading:action.payload
            }
        case 'ERROR':
            return{
                ...state,
                error:action.payload
            }
        case 'GET':
            return{
                ...state,
                todos:action.payload,
            }
    
        default:
            return state;
    }
}

export default AppReducer;