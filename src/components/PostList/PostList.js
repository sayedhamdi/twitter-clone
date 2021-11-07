import {useState,useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function PostList(){
	let [posts,setPosts] = useState([{title:"Ekher a7deth thaawra",body:'تابعوا أخبار تونس اليوم: أخبار الإرهاب في تونس، مستجدات مجلس نواب الشعب ،اتفاقيات الاتحاد العام التونسي للشغل، طقس اليوم، أخبار السياسة في تونس…',author:'خميس بوبطان'}])
	let [isLoading,setIsLoading] = useState(true)
	function fetchPosts(){
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				let res = response.json()
				console.log(res)
				return res
			}
			)
			.then(json => {
				console.log(json)
				setPosts([json[1]])
				setIsLoading(false)
			})
	}
	useEffect(()=>{
		if(isLoading){
			fetchPosts()
		}
		
	})
	return (
		<div>
			{isLoading && <div style={{display:'flex',justifyContent:'center',alignItem:'center',height:'100px'}}><CircularProgress /></div>}
			{!isLoading && <Post {...posts[0]}/>}
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