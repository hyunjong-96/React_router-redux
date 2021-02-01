const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

export const increase=()=>({type: INCREASE})
export const decrease=()=>({type: DECREASE})

const initialState=0;

export const increaseAsync=()=>(dispatch)=>{//thunk함수
    setTimeout(()=>dispatch(increase()),1000)
}
export const decreaseAsync=()=>(dispatch)=>{
    setTimeout(()=>dispatch(decrease()),1000)
}

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