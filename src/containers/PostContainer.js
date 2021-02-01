import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getPost,goToHome} from '../modules/posts'
import Post from '../components/Post'

function PostContainer({postId}){
    const {data:post,loading,error} = useSelector(state=>state.posts.post)
    //데이터가 아예존재하지않을 경우, 비구조화 할당이 오류나지 않도록
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPost(postId))
    },[postId,dispatch])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러발생</div>
    if(!post) return <div>없음</div>
    return(
        <>
        <button onClick={()=>dispatch(goToHome())}>홈으로 이동</button>
        <Post post={post}/>
        </>
    ) 
}

export default PostContainer