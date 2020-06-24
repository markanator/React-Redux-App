// Reducers
const initialState = {
    dataType: "character",
    isFetching: false,
    error: "",
    data: [],
}


export const MortyReducer = (state = initialState, action ) => {
    switch(action.type){
        case "FETCH_QUOTE_START":
            return {...state,
            isFetching: true,
            error: ""
        };
        case "FETCH_QUOTE_SUCCESS":
            return {...state,
                data: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}