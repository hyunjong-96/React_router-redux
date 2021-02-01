import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import rootReducer, { rootSaga } from './modules'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import myLogger from './middlewares/myLogger'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import creatSagaMiddleWare from 'redux-saga'

const customHistory = createBrowserHistory()
const sagaMiddleware = creatSagaMiddleWare()//사가 미들웨어 만들어줌

const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(ReduxThunk.withExtraArgument({history:customHistory}),
  sagaMiddleware, //사가 미들웨어 적용
  logger)))
console.log('rootReducer의 상태값!: ',store.getState())

sagaMiddleware.run(rootSaga)//루트 사가를 실행
//스토어가 생성된 후에 코드를 실행시켜야함.
ReactDOM.render(
  <Router history={customHistory}>
  <Provider store={store}>
    <App />
    </Provider></Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
