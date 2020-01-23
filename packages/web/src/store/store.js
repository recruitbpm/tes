import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storageMiddleware from 'bi-core/storageMiddleware';
import { app, lists, navigation } from 'bi-core/app/reducer';
import { candidates } from 'bi-core/candidates/reducer';
import { user } from 'bi-core/user/reducer';
import { config } from 'bi-core/config/reducer';
import { snackBar } from 'bi-core/snackBar/reducer';
import fetchMiddleware from 'bi-core/fetchMiddleware';

const reducers = combineReducers({
  app,
  lists,
  navigation,
  candidates,
  user,
  config,
  snackBar,
});

/* eslint-disable no-underscore-dangle, no-undef */
const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunk,
      fetchMiddleware({ onError: null }),
      storageMiddleware({
        getItem: key => localStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: key => localStorage.removeItem(key),
        multiGet: keys => keys.map(key => localStorage.getItem(key)),
        multiSet: tuples => tuples.forEach(([key, value]) => localStorage.setItem(key, value)),
        multiRemove: keys => keys.forEach(key => localStorage.removeItem(key)),
      })
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose
  )
);
/* eslint-enable */

export default store;
