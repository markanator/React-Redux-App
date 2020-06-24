// ACTIONS
import axios from 'axios';




const URL = "https://rickandmortyapi.com/api/character";

export const getData = () => dispatch => {
    dispatch({type: "FETCH_QUOTE_START"});
    axios.get(URL)
    .then((resp)=>{
        console.log(resp);
        dispatch({type:"FETCH_QUOTE_SUCCESS",payload: resp.data.results});
    })
    .catch((err)=>{
        console.log(err);
    });
}