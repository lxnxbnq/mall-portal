import { put } from 'redux-saga/effects';
import { IinitState } from './interface';
export const Change_Count = 'Change_Count';
export const DECREASE_Count = 'DECREASE_Count';

const initState: IinitState = {
  count: 1
};

// action handler
const ACTION_HANDLER: any = {
  [Change_Count]: (state: IinitState, action: any) => {
    return { ...state, ...action.payload };
  },
  [DECREASE_Count]: (state: IinitState, action: any) => {
    return { ...state, ...action.payload };
  }
};

export default {
  namespace: 'about',
  effects: {
    *increaseCount({ payload }: any) {
      yield put({
        type: Change_Count,
        payload
      });
    },
    *decreaseCount({ payload }: any) {
      yield put({
        type: DECREASE_Count,
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
