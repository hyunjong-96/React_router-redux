import {createStore} from 'redux'//스토어를 만들어줄 함수

//리덕스에서 관리할 상태
const initialState = {
    counter:0,
    text:'',
    list:[]
}

//액션타입 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//액션 함수 정의
//액션 생성함수는 주로 camelCase
function increase(){
    return{
        type:INCREASE//type값
    }
}

const decrease=()=>({
    type:DECREASE
})

const changeText=(text)=>({
    type:CHANGE_TEXT,
    text
})

const addToList =(item)=>({
    type:ADD_TO_LIST,
    item
})

//리듀서 만들기
function reducer(state=initialState,action){
    //state의 초깃값은 initialState
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                counter:state.counter+1
            };
        case DECREASE:
            return{
                ...state,
                counter:state.counter-1
            }
        case CHANGE_TEXT:
            return{
                ...state,
                text:action.text
            }
        case ADD_TO_LIST:
            return{
                ...state,
                list:state.list.concat(action.item)
            }
    }
}

//스토어 만들기
const store = createStore(reducer)

console.log('getState!:',store.getState()) //햔재 store안에 들어있는 상태 조회

const listener=()=>{
    const state = store.getState()
    console.log('state!:',state)
}

const unsubscribe = store.subscribe(listener)//구독 새제하고 싶을떈 unsubscribe()를 호출

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText('안녕하세요'))
store.dispatch(addToList({id:1,text:'하이'}))