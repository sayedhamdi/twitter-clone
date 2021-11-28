import {useState,useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function PostList({posts,isLoading,loadedPostsNumber,setIsLoading}){
	
	
	return (
		<div className="Posts">
			{isLoading && <div style={{display:'flex',justifyContent:'center',alignItem:'center',height:'100px'}}><CircularProgress /></div>}
			{!isLoading && posts.map((post,index)=>{
				if(index>loadedPostsNumber){
					return 
				}
				return(<Post  {...post} id={post._id} setIsLoading={setIsLoading}/>)
			
			})
		
		}
		</div>
	)
}

let postStyle ={
	span : {
		fontWeight:'bold'
	}
} 
function Post({title,body,date,author,id,setIsLoading}){
    console.log(id)
    async function deletePost(){
            
            await fetch(`http://localhost:8000/posts/${id}`,{method:"DELETE"})
            setIsLoading(true);
    }
	return (
		<div >
		<h1>{title}</h1>
		<p>
			{body}
		</p>
        <button onClick={deletePost}>delete</button>
		<span style={postStyle.span}>{author}</span>
		</div>
	)
}
