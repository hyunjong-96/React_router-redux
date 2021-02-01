import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './modules'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import myLogger from './middlewares/myLogger'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk,logger)))
console.log('rootReducer의 상태값!: ',store.getState())

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter></Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
