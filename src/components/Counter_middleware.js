import React from 'react'

function counter_middleware({number,onIncrease,onDecrease}){
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default counter_middleware