import axios from 'axios';
import * as dataActions from './actions';


export const fetchData = () => async dispatch => {
    dispatch(dataActions.FetchDataRequest());

    try{
        const characters = await axios.get('https://rickandmortyapi.com/api/character');
        dispatch(dataActions.FetchDataSuccess(characters.results)); 
        console.log(characters.results) 
    } catch(error){
        dispatch(dataActions.FetchDataError(error));
    }   
};