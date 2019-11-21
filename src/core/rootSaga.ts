import { takeEvery, all } from 'redux-saga/effects';

import about from '@pages/about/models/index';
import member from '@pages/member/models/index';

const namespaces: string[] = [];

function P(arr: any[]) {
  return new Promise((resolve, reject) => {
    const actions = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      const o = arr[i];
      if (namespaces.indexOf(o.namespace) !== -1) {
        reject(`${o.namespace} 命名空间已经存在`);
      } else {
        namespaces.push(o.namespace);
        const l = Object.keys(o.effects).map(item =>
          takeEvery(`${o.namespace}/${item}`, o.effects[item])
        );
        actions.push(...l);
      }
    }
    resolve(actions);
  });
}

function* rootSaga() {
  try {
    const list = yield P([about, member]);

    // 在对应的action被dispatch时调用effect
    yield all([...list]);
  } catch (e) {
    throw new Error(e);
  }
}

export default rootSaga;