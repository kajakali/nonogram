import { combineReducers } from 'redux';

const pattern = (state = [], action) => {
    if(action.type === 'SET_PATTERN'){
        return action.payload;
    }
    return state;
}

const patternList =(state = [], action) => {
    if(action.type === 'SET_PATTERN_LIST'){
        return action.payload
    }
    return state;
}
const rootReducer = combineReducers({
    pattern,
    patternList
});

export default rootReducer;