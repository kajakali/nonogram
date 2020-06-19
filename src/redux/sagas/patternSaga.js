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

    }
}
function* patternSaga() {
    yield takeLatest('FETCH_PATTERN', fetchPattern);
}

export default patternSaga;