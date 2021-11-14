
import './NewsFeed.css'
import {Button } from "react-bootstrap"
import {FiSettings} from "react-icons/fi"
import HeaderTab from "../HeaderTab/HeaderTab"
import PostList from '../PostList/PostList'
import {useState,useEffect} from "react"


export default function NewsFeed(){
	let [post,setPost] = useState("")
	let [posts,setPosts] = useState([{title:"Ekher a7deth thaawra",body:'تابعوا أخبار تونس اليوم: أخبار الإرهاب في تونس، مستجدات مجلس نواب الشعب ،اتفاقيات الاتحاد العام التونسي للشغل، طقس اليوم، أخبار السياسة في تونس…',author:'خميس بوبطان'}])
	let [loadedPostsNumber,setLoadedPostsNumber] = useState(10)
	let [isLoading,setIsLoading] = useState(true)
	
	function handleSendPostRequest(){
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
			title: 'titre feragh',
			body: post,
			userId: 1,
			}),
			headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		})
		.then((response) => response.json())
		.then((json) => console.log(json));
	}
	function handlePostSubmit(){

		console.log(post)
		setPosts([{body:post},...posts])
		
		setPost("")
		handleSendPostRequest()
	}
	window.onscroll = function (e) {  
		let viewPortHeight = window.innerHeight
		
		
		let heightLoadPosts = document.querySelector(".Posts").scrollHeight - 200
		let currentPosition = viewPortHeight + window.scrollY
	
			if( currentPosition >= heightLoadPosts ){
				console.log("loading posts")
				setLoadedPostsNumber(loadedPostsNumber+10)
			}
		

	}
	function fetchPosts(){
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(postsData => {
				console.log(postsData)
				setPosts(postsData)
				setIsLoading(false)
			})
	}
	useEffect(()=>{
		if(isLoading){
			fetchPosts()
		}
		
	})

	return (
		<div className="NewsFeed">
			<HeaderTab text="Home"  cornerIcon={<FiSettings />} />
			<textarea onChange={(e)=>setPost(e.target.value)}></textarea>
			<Button onClick={handlePostSubmit}>POST</Button>
			<PostList posts={posts} setPosts={setPosts} isLoading={isLoading} loadedPostsNumber={loadedPostsNumber} />
		</div>
	)
} 

