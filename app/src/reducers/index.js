
// Reducers
const initialState = {
    flavor: "character",
    isFetching: false,
    error: "",
    data: [],
    locData: [],
    epiData: [],
}


export const MortyReducer = (state = initialState, action ) => {
    switch(action.type){
        case "FETCH_DATA_START":
            return {...state,
            isFetching: true,
            error: ""
        };
        case "FETCH_QUOTE_SUCCESS":
            return {...state,
                data: action.payload,
                isFetching: false,
            }
        case "FETCH_LOC_SUCCESS":
            return {...state,
                locData: action.payload,
                isFetching: false,
            }
        case "FETCH_EPI_SUCCESS":
            return {...state,
                epiData: action.payload,
                isFetching: false,
            }
        case "SET_FLAVOR":
            return {...state,
                flavor: action.payload,
            }
        default:
            return state;
    }
}