import {combineReducers} from 'redux'
import counter from './counter'
import todos from './todos'
import counter_middleware from './counter_middleware'

const rootReducer = combineReducers({
    counter,
    todos,
    counter_middleware
})

export default rootReducer