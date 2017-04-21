import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

//reducers
import reducer from './reducer.js';

const store = createStore(
  reducer,
  applyMiddleware(createLogger({collapsed: true}))
);

export default store;
