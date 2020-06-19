import { all } from 'redux-saga/effects';
import patternSaga from './patternSaga';

export default function* rootSaga() {
    yield all([
        patternSaga(),
    ]);
}