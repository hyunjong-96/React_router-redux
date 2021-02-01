import {combineReducers} from 'redux'
import counter from './counter'
import todos from './todos'
import counter_middleware,{counterSaga} from './counter_middleware'
import posts from './posts'
import {all} from 'redux-saga/effects'

const rootReducer = combineReducers({
    counter,
    todos,
    counter_middleware,
    posts
})
export function* rootSaga(){
    yield all([counterSaga()])
    //all은 배열 안의 여러 사가를 동시에 실행시켜줌
}

export default rootReducer