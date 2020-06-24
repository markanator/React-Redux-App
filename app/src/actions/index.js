// ACTIONS
import axios from 'axios';

export const getData = () => dispatch => {
    dispatch({type: "FETCH_DATA_START"});
    axios.get("https://rickandmortyapi.com/api/character")
    .then((resp)=>{
        console.log(resp.data.results);
        dispatch({type:"FETCH_QUOTE_SUCCESS",payload: resp.data.results});
    })
    .catch((err)=>{
        console.log(err);
    });
}

export const getLocations = () => dispatch =>{
    dispatch({type: "FETCH_DATA_START"});
    axios.get("https://rickandmortyapi.com/api/location")
    .then((resp)=>{
        console.log(resp.data.results);
        dispatch({type:"FETCH_LOC_SUCCESS",payload: resp.data.results});
    })
    .catch((err)=>{
        console.log(err);
    });
}

export const getEpisodes = () => dispatch =>{
    dispatch({type: "FETCH_DATA_START"});
    axios.get("https://rickandmortyapi.com/api/episode")
    .then((resp)=>{
        console.log(resp.data.results);
        dispatch({type:"FETCH_EPI_SUCCESS",payload: resp.data.results});
    })
    .catch((err)=>{
        console.log(err);
    });
}

export const setFlav = newTitle => {
    return { type: "SET_FLAVOR", payload: newTitle };
};