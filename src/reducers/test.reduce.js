import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';
import TYPE from '../constants';
const { TEST } = TYPE;
const initialState = fromJS({
  testInfo: '',
  fetchInfo: {}
});

export default createReducer(initialState, {
  [TEST.SAY]: (state, action) => {
    return state.setIn(['testInfo'], action.data)
  },
  [TEST.FETCH]: (state, action) => {
    return state.setIn(['fetchInfo'], action.data)
  }
});
