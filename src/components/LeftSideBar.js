import {Col,Container,Row } from "react-bootstrap"
import {BsTwitter} from "react-icons/bs"
import Menu from "./Menu"
export default function LeftSideBar(){
	return (
		<Col sm="3">
			<Container fluid>
				<Row>
					<Col><BsTwitter style={{fontSize:'28px',color:'#2B9BF0',marginTop:"15px"}} /></Col>
				</Row>
				<Row>
					<Menu />
				</Row>
				<Row>
					Button
				</Row>
				<Row>
					Profiles
				</Row>
			</Container>
		</Col>
	)	
}