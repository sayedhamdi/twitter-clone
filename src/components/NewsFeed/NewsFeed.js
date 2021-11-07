
import './NewsFeed.css'
import {Button } from "react-bootstrap"
import {FiSettings} from "react-icons/fi"
import HeaderTab from "../HeaderTab/HeaderTab"
import PostList from '../PostList/PostList'



export default function NewsFeed(){
	

	return (
		<div className="NewsFeed">
			<HeaderTab text="Home"  cornerIcon={<FiSettings />} />
			<textarea></textarea>
			<Button>POST</Button>
			<PostList />
		</div>
	)
} 

