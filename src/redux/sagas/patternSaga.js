import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchPattern(action) {
    try {
        // action.payload is shaped like {id: 1}
        const response = yield axios.get(`/pattern/${action.payload.id}`);
        yield console.log(response.data[0].masterPattern);
        yield put({type: 'SET_PATTERN', payload: response.data[0]});
    }
    catch (error) {
        console.log('error in fetch pattern saga', error);
    }
}
function* sendPattern(action) {
    try {
        yield console.log(action.payload);
        yield axios.post('/pattern', action.payload);
        yield put({type: 'FETCH_ALL_PATTERNS'});
    }
    catch (error) {
        console.log('error in send pattern saga', error);
    }
}
function* fetchAllPatterns() {
    try {
        const response = yield axios.get('/pattern');
        yield console.log('in all patterns saga', response.data);
        yield put({type: 'SET_PATTERN_LIST', payload: response.data});
        //TODO
    }
    catch (error) {
        console.log('error in fetch all patterns saga', error);
    }
}
function* patternSaga() {
    yield takeLatest('FETCH_PATTERN', fetchPattern);
    yield takeLatest('SEND_PATTERN', sendPattern);
    yield takeLatest('FETCH_ALL_PATTERNS', fetchAllPatterns);
}

export default patternSaga;