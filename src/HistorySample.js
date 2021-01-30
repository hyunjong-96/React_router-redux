import React,{useEffect} from 'react'

function HistorySample({history}){
    const goBack = ()=>{
        history.goBack()
    }
    const goHome = () =>{
        history.push('/')
    }
    
    useEffect(()=>{
        console.log('history:!!',history)
        const unblock = history.block('정말로 가실건가요?')
        return () =>{
            unblock()
        }
    })

    return(
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    )
}

export default HistorySample