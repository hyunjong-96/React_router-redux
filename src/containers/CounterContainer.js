import React from 'react'
import {useSelector,useDispatch,shallowEqual} from 'react-redux'
import Counter from '../components/Counter'
import {increase, decrease, setDiff} from '../modules/counter'



function CounterContainer(){
    //useSelector는 리덕스 스토어의 상태를 조회하는 hook
    //state의 값은 store.getState()함수를 호출했을 때 나타나는 결과물과 동일
    const {number,diff} = useSelector(state=>({
        number:state.counter.number,
        diff:state.counter.diff
    }),shallowEqual)

    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할수 있게 해주는 hook
    const dispatch = useDispatch()
    //각 액션들을 디스패치하는 함수.
    const onIncrease=()=>dispatch(increase())
    const onDecrease=()=>dispatch(decrease())
    const onSetDiff=()=>dispatch(setDiff(diff))

    return(
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer