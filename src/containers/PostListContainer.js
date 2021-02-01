import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import PostList from '../components/PostsList'
import {getPosts} from '../modules/posts'

function PostListContainer(){
    const {data, loading, error} = useSelector(state=>state.posts.posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(data) return data
        dispatch(getPosts())
    },[data,dispatch])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러발생</div>
    if(!data) return <div>없음</div>

    return <PostList posts={data}/>
}

export default PostListContainer