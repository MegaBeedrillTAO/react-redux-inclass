import Axios from 'axios';

const initialState = {
    characters:[],
    loading: false
}

const GET_CHARACTERS = 'GET_CHARACTERS';

export function getStarWarsCharacters(){
    return{
        type: GET_CHARACTERS,
        payload: Axios.get('https://swapi.co/api/people')
    }
}

export default function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_CHARACTERS}_FULFILLED`:
            return{
                ...state,
                characters: payload.data.results,
                loading: false
            }
        case `${GET_CHARACTERS}_PENDING`:
            return{
                ...state,
                loading: true
            }
        default: return state;
    }
}