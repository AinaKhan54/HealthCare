import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginRequest, loginSuccess, loginFailure } from './authSlice';

function* loginSaga(action: ReturnType<typeof loginRequest>): Generator<any, void, any> {
  try {
    const response = yield call(axios.post, 'http://localhost:5000/api/users/login', action.payload);
    // Store the token in local storage
    localStorage.setItem('token', response.data.token);
    
    yield put(loginSuccess(response.data.token));
  } catch (error: any) {
    yield put(loginFailure(error.response.data.message || 'Login failed'));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
}