import { call, put, takeEvery } from 'redux-saga/effects';
import * as postsAPI from '../api/posts'
import {createPromiseThunk,reducerUtils,handleAsyncActions} from '../lib/asyncUtils'

/**액션 타입 */
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const GET_POST='GET_POST'
const GET_POST_SUCCESS='GET_POST_SUCCESS'
const GET_POST_ERROR='GET_POST_ERROR'

// export const getPosts=()=>async(dispatch)=>{
//     dispatch({type:GET_POSTS})
//     try{
//         const posts = await postsAPI.getPosts()//api호출
//         dispatch({type:GET_POSTS_SUCCESS,posts})//호출성공
//     }catch(error){
//         dispatch({type:GET_POSTS_ERROR,error:error})//호출실패
//     }
// }
// export const getPost=(id)=>async(dispatch)=>{
//     dispatch({type:GET_POST})
//     try{
//         const post = await postsAPI.getPostById(id)
//         dispatch({type:GET_POST_SUCCESS,post})
//     }catch(error){
//         dispatch({type:GET_POST_ERROR,error:error})
//     }
// }
export const getPosts = createPromiseThunk(GET_POSTS,postsAPI.getPosts)
export const getPost = createPromiseThunk(GET_POST,postsAPI.getPostById)

function* getPostsSaga(){
    try{
        const posts = yield call(postsAPI.getPosts)//call을 사용하여 특정 함수를 호출하고 결과물이 반환될때까지 기다림
        yield put({
            type:GET_POSTS_SUCCESS,
            payload:posts
        })//성공 액션 대스패치
    }catch(error){
        yield put({
            type:GET_POSTS_ERROR,
            error:error
        })//실패 액션 디스패치
    }
}
function* getPostSaga(action){
    const param = action.payload
    //const id = action.meta
    try{
        const post = yield call(postsAPI.getPostById,param)
        //getPostById에 파라미터를 넣고싶다면 call함수의 두번째 파라미터에
        yield put({
            type:GET_POST_SUCCESS,
            payload:post
        })
    }catch(error){
        yield put({
            type:GET_POST_ERROR,
            error:error
        })
    }
}
export function* postsSaga(){
    yield takeEvery(GET_POSTS,getPostsSaga)
    yield takeEvery(GET_POST,getPostSaga)
}
// const initialState={
//     posts:{
//         loading:false,
//         data:null,
//         error:null
//     },
//     post:{
//         loading:false,
//         data:null,
//         error:null
//     }
// }
const initialState={
    posts:reducerUtils.initial(),
    post:reducerUtils.initial()
}

export default function posts(state=initialState,action){
    switch(action.type){
        case GET_POSTS:
            // return{
            //     ...state,
            //     // posts:{
            //     //     loading:true,
            //     //     data:null,
            //     //     error:null
            //     // }
            //     posts:reducerUtils.loading()
            // }
        case GET_POSTS_SUCCESS:
            console.log('module !!!!!!!!!!!!!!!!!!!!',state)
            // return{
            //     ...state,
            //     // posts:{
            //     //     loading:false,
            //     //     data:action.posts,
            //     //     error:null
            //     // }
            //     posts:reducerUtils.success(action.payload)
            // }
        case GET_POSTS_ERROR:
            // return{
            //     ...state,
            //     // posts:{
            //     //     loading:false,
            //     //     data:null,
            //     //     error:action.error
            //     // }
            //     posts:reducerUtils.error(action.error)
            // }
            return handleAsyncActions(GET_POSTS,'posts')(state,action)
        case GET_POST:
            // return{
            //     ...state,
            //     // post:{
            //     //     loading:true,
            //     //     data:null,
            //     //     error:null
            //     // }
            //     post:reducerUtils.loading()
            // }
        case GET_POST_SUCCESS:
            // return{
            //     ...state,
            //     // post:{
            //     //     loading:false,
            //     //     data:action.post,
            //     //     error:null
            //     // }
            //     post:reducerUtils.success(action.payload)
            // }
        case GET_POST_ERROR:
            // return{
            //     ...state,
            //     // post:{
            //     //     loading:false,
            //     //     data:null,
            //     //     error:action.error
            //     // }
            //     post:reducerUtils.error(action.error)
            // }
            return handleAsyncActions(GET_POST,'post',true)(state,action)
        default:
            return state
    }
}

export const goToHome=()=>(dispatch,getState,{history})=>{
    history.push('/')
}