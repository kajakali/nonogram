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
        //TODO right here - at the moment the array is simply added to the database, but nothing changes afterward.
    }
    catch (error) {
        console.log('error in send pattern saga', error);
    }
}
function* patternSaga() {
    yield takeLatest('FETCH_PATTERN', fetchPattern);
    yield takeLatest('SEND_PATTERN', sendPattern);
}

export default patternSaga;