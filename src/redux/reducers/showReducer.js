const initialState = {
    favCharacter: ''
}

const UPDATE_CHAR = 'UPDATE_CHAR';

export function updateFavChar(char){
    return {
        type: UPDATE_CHAR,
        payload: char
    }
}

export default function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_CHAR:
            return{
                ...state,
                favCharacter: payload
            }
        default: return state;
    }
}