import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchPattern(action) {
    try {
        yield console.log(action.payload);
        const response = yield axios.get(`/pattern/${action.payload.id}`);
        yield console.log(response);
    }
    catch (error) {

    }
}
function* patternSaga() {
    yield takeLatest('FETCH_PATTERN', fetchPattern);
}

export default patternSaga;