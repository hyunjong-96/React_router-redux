//Promise에 기반한 Thunk를 만들어주는 함수입니다.
export const createPromiseThunk = (type,promiseCreator)=>{
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`]
    //요청시작
    return param=>async(dispatch)=>{
        dispatch({type,param})
        try{
            const payload = await promiseCreator(param)
            dispatch({type:SUCCESS,payload})
        }catch(error){
            dispatch({type:ERROR,payload:error,error:true})
        }
    }
}

//리듀서에서 사용 할 수 있는 여러 유틸 함수
export const reducerUtils={
    initial:(initialData=null)=>({
        loading:false,
        data:initialData,
        error:null
    }),
    
    loading:(prevState=null)=>({
        loading:true,
        data:prevState,
        error:null
    }),

    success:(payload)=>({
        loading:false,
        data:payload,
        error:null
    }),

    error:(error)=>({
        loading:false,
        data:null,
        error:error
    })
}