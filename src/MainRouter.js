import { Route,Routes} from "react-router-dom";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import Login from "./pages/Login"
export default function MainRouter({setIsAuth}){
	return (
		<Routes>
			
			<Route path="/home" element={<NewsFeed />} />
			<Route path="/explore" element={<div>Home Explore</div>} exact/>
			<Route path="/notifications" element={<div>Page Notifications</div>} exact/>
			<Route  path="/login" element={<Login setIsAuth={setIsAuth} />} exact/>
		</Routes>
	)
}