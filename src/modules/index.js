import {combineReducers} from 'redux'
import counter from './counter'
import todos from './todos'
import counter_middleware from './counter_middleware'
import posts from './posts'

const rootReducer = combineReducers({
    counter,
    todos,
    counter_middleware,
    posts
})

export default rootReducer