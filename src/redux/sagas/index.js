import { all } from 'redux-saga/effects';
import patternSaga from './patternSaga';
import crossStitchSaga from './crossStitchSaga';

export default function* rootSaga() {
    yield all([
        patternSaga(),
        crossStitchSaga(),
    ]);
}