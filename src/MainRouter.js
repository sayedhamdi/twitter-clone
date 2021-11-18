import { Route,Routes} from "react-router-dom";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Authorise from "./components/Authorise"
export default function MainRouter({setIsAuth,isAuth}){
	return (
		<Routes>
			<Route path="/home" element={<Authorise isAuth={isAuth}><NewsFeed /></Authorise>} isAuth/>
			<Route path="/explore" element={<Authorise  isAuth={isAuth}><div>Home Explore</div></Authorise>} exact/>
			<Route path="/notifications" element={<Authorise  isAuth={isAuth}><div>Page Notifications</div></Authorise>} exact/>
			<Route  path="/login" element={<Login setIsAuth={setIsAuth} />} exact/>
			<Route path="/signup" element={<SignUp />} exact/>
		</Routes>
	)
}