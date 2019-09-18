import {createStore, applyMiddleware, combineReducers} from 'redux';
import showReducer from './reducers/showReducer';
import promise from 'redux-promise-middleware';
import starWarsReducer from './reducers/starWarsReducer';
import breakingBadReducer from './reducers/breakingBadReducer';

const rootReducer = combineReducers({
    showReducer,
    starWarsReducer,
    breakingBadReducer
})

export default createStore(rootReducer,applyMiddleware(promise));