import { Route,Routes} from "react-router-dom";
import NewsFeed from "./components/NewsFeed/NewsFeed";
export default function MainRouter(){
	return (
		<Routes>
			
			<Route path="/home" element={<NewsFeed />} />
			<Route path="/explore" element={<div>Home Explore</div>} exact/>
			<Route path="/notifications" element={<div>Page Notifications</div>} exact/>
			<Route path="/login" element={<div>Page Login</div>} exact/>
		</Routes>
	)
}