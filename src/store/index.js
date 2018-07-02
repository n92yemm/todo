import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const composeTools =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false
      })
      : compose;

const store = createStore(reducer, composeTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;