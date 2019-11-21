import { combineReducers } from 'redux';
import about from '@pages/about/models/index';
import member from '@pages/member/models/index';

const reducers = combineReducers({
  about: about.reducer,
  member: member.reducer
});

export default reducers;
