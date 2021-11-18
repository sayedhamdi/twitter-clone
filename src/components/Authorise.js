import { useNavigate } from "react-router-dom"
import {useEffect} from "react"
export default function Authorise({children,isAuth}){
	let navigate = useNavigate();
	useEffect(()=>{
		if(!isAuth)
			navigate("/login")
	})
	
	if (isAuth){
		return <>{children}</>
	}
	return null
}