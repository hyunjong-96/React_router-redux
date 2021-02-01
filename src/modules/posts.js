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
            return handleAsyncActions(GET_POST,'post')(state,action)
        default:
            return state
    }
}

export const goToHome=()=>(dispatch,getState,{history})=>{
    history.push('/')
}