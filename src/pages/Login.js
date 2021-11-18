import {Container,Row,Button,Alert} from "react-bootstrap"
import {BsTwitter} from "react-icons/bs"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
export default function Login({setIsAuth}){
	let navigate = useNavigate()
	let [email,setEmail]  = useState("")
	let [password,setPassword]  = useState("")
	
	//error messages
	let [emailError,setEmailError] = useState("")
	let [passError,setPassError] = useState("")
	let [errorLogin,setErrorLogin] = useState("")
	function handleLogin(e){
		e.preventDefault();
		// validation 
		if ( !email ){
			setEmailError("Email est vide")
			
		}else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
			setEmailError("Salah el email rahou ghalet")
			
		}
		else{
			
			setEmailError("")
		}
		if(!password){
			setPassError("Password est vide !")
			return
		}else{
			setPassError("")
		}
		setErrorLogin("")
		//Envoyer 
		
		if (email =="hmed@gmail.com" && password=="1234hmed") 
		{
			//logi el user
			setErrorLogin("")
			setIsAuth(true)
			console.log("you are logged in")
		}else{
			setErrorLogin("Error in email or password")
		}
		console.log(`email : ${email} | password : ${password}`)
		navigate("/home")
	}
	return (
		<Container >
			<Row className="justify-content-md-center">
				<form onSubmit={e=>handleLogin(e)}>
				<BsTwitter style={{fontSize:"70px",color:"#2B9BF0"}}/>	
				<h2 style={{textAlign:'center',marginTop:'20px',marginBottom:'20px'}}>Login to Twitter </h2>	
				{(errorLogin) && <Alert variant="danger">{errorLogin}</Alert>}
				{(emailError) && <Alert variant="danger">{emailError}</Alert>}
				<input onChange={e=>setEmail(e.target.value)} style={{margin:'10px'}} type="text" value={email} placeholder="email"/>
				{(passError) && <Alert variant="danger">{passError}</Alert>}
				  
    
  
				<input onChange={e=>setPassword(e.target.value)} style={{margin:'10px'}} type="password" value={password} placeholder="password"/>
				<Button type="submit" onClick={handleLogin}>Login</Button>
				</form>
			</Row>		
		</Container>
	)
}