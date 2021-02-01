import {delay,put, takeEvery, takeLatest} from 'redux-saga/effects'

const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const INCREASE_ASYNC = 'INCREASE_ASYNC'
const DECREASE_ASYNC = 'DECREASE_ASYNC'

export const increase=()=>({type: INCREASE})
export const decrease=()=>({type: DECREASE})
export const increaseAsync=()=>({type:INCREASE_ASYNC})
export const decreaseAsync=()=>({type:DECREASE_ASYNC})

const initialState=0;

// export const increaseAsync=()=>(dispatch)=>{//thunk함수
//     setTimeout(()=>dispatch(increase()),1000)
// }
// export const decreaseAsync=()=>(dispatch)=>{
//     setTimeout(()=>dispatch(decrease()),1000)
// }
function* increaseSaga(){
    yield delay(1000)
    yield put(increase()) 
    //effect의 함수인 put은 새로운 액션을 디스패치할수있다
}
function* decreaseSaga(){
    yield delay(1000)
    yield put(decrease())
}
export function* counterSaga(){
    yield takeEvery(INCREASE_ASYNC, increaseSaga)
    //모든 INCREASE_ASYNC액션을 처리
    yield takeLatest(DECREASE_ASYNC,decreaseSaga)
    //가장 마지막으로 디스패치된 DECREASE_ASYNC액션만 처리
}
//takeEvery는 특정 액션타입에 대해 디스패치되는 모든 액션처리
//takeLatest는 특정 액션 타입에 대하여 디스패치된 가장 만지막 액션만을 처리하는 함수

export default function counter(state=initialState,action){
    switch(action.type){
        case INCREASE:
            return state+1
        case DECREASE:
            return state-1
        default:
            return state
    }
}