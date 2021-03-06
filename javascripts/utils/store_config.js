import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
export const store = createStoreWithMiddleware(reducers);