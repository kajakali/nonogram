import { combineReducers } from 'redux';

const pattern = (state = [], action) => {
    if(action.type === 'SET_PATTERN'){
        return action.payload;
    }
    return state;
}

export default combineReducers({
    pattern,
})