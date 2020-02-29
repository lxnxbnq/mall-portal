import { put, call } from 'redux-saga/effects';
import { IinitState } from './interface';
export const Change_Count = 'Change_Count';
// import { getCat } from '@service/api';

const initState: IinitState = {
  count: 1
};

// action handler
const ACTION_HANDLER: any = {
  [Change_Count]: (state: IinitState, action: any) => {
    return { ...state, ...action.payload };
  }
};

export default {
  namespace: 'classify',
  effects: {
    *increaseCount({ payload }: any) {
      // yield call(getCat);
      yield put({
        type: Change_Count,
        payload
      });
    }
  },
  reducer: (state: IinitState = initState, action: any) => {
    return ACTION_HANDLER[action.type]
      ? ACTION_HANDLER[action.type](state, action)
      : state;
  }
};
