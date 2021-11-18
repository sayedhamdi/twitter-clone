import {Container,Row,Button,Alert} from "react-bootstrap"
import {BsTwitter} from "react-icons/bs"
import {useState} from "react"
export default function SignUp(){

	return (
		<Container >
			<Row className="justify-content-md-center">
				<form >
				<BsTwitter style={{fontSize:"70px",color:"#2B9BF0"}}/>	
				<h2 style={{textAlign:'center',marginTop:'20px',marginBottom:'20px'}}>create an account to Twitter </h2>	
				<input style={{margin:'10px'}} type="text"  placeholder="email"/>
		
				  
    
  
				<input  style={{margin:'10px'}} type="password"  placeholder="password"/>
				<Button type="submit">Login</Button>
				</form>
			</Row>		
		</Container>
	)
}