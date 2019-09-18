import Axios from 'axios';

const initialState = {
    characters1:[],
    loading1: false
}

const GET_CHARACTERSBB = 'GET_CHARACTERSBB';

export function getBBCharacters(){
    return{
        type: GET_CHARACTERSBB,
        payload: Axios.get('https://breakingbadapi.com/api/characters')
    }
}

export default function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_CHARACTERSBB}_FULFILLED`:
            return{
                ...state,
                characters1: payload.data,
                loading1: false
            }
        case `${GET_CHARACTERSBB}_PENDING`:
            return{
                ...state,
                loading1: true
            }
        default: return state;
    }

}