import React from 'react'
import Counter_middleware from '../components/Counter_middleware'
import {useSelector,useDispatch} from 'react-redux'
import {increaseAsync,decreaseAsync} from '../modules/counter_middleware'

function CounterContainer_middleware(){
    const number = useSelector(state=>state.counter_middleware)
    const dispatch = useDispatch()
    // const onIncrease=()=>(dispatch(increase()))
    // const onDecrease=()=>(dispatch(decrease()))
    const onIncrease=()=>{dispatch(increaseAsync())}
    const onDecrease=()=>{dispatch(decreaseAsync())}
    return(
        <>
        <Counter_middleware
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
        </>
    )
}

export default CounterContainer_middleware