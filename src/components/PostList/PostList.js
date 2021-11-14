import {useState,useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function PostList({posts,isLoading,loadedPostsNumber}){
	
	
	return (
		<div className="Posts">
			{isLoading && <div style={{display:'flex',justifyContent:'center',alignItem:'center',height:'100px'}}><CircularProgress /></div>}
			{!isLoading && posts.map((post,index)=>{
				if(index>loadedPostsNumber){
					return 
				}
				return(<Post  {...post}/>)
			
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
function Post({title,body,date,author}){
	return (
		<div >
		<h1>{title}</h1>
		<p>
			{body}
		</p>
		<span style={postStyle.span}>{author}</span>
		</div>
	)
}