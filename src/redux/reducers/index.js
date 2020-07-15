import { combineReducers } from 'redux';

const pattern = (state = [], action) => {
    if(action.type === 'SET_PATTERN'){
        return action.payload;
    }
    return state;
}

const patternList =(state = [], action) => {
    if(action.type === 'SET_PATTERN_LIST'){
        return action.payload;
    }
    return state;
}

const crossStitch = (state = [], action) => {
    if(action.type === 'SET_A_CROSSSTITCH'){
        return action.payload;
    }
    return state;
}
const rootReducer = combineReducers({
    pattern,
    patternList,
    crossStitch,
});

export default rootReducer;