import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getPost} from '../modules/posts'
import Post from '../components/Post'

function PostContainer({postId}){
    const {data:post,loading,error} = useSelector(state=>state.posts.post)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPost(postId))
    },[postId,dispatch])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러발생</div>
    if(!post) return <div>없음</div>
    return <Post post={post}/> 
}

export default PostContainer