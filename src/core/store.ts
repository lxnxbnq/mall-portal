import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducer';
import sagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

const enhancer = compose(applyMiddleware(sagaMiddleware));
const store = createStore(reducers, enhancer);

sagaMiddleware.run(sagas);
export default store;