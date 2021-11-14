import MENU_ITEMS from './IconsList'
import {Link } from "react-router-dom"
import "./Menu.css"
export default function Menu(){
 return (
	 <ul className="Menu" style={{listStyleType:'none'}}>
		 {MENU_ITEMS.map(item=><MenuItem text={item.text} link={item.link} icon={<item.icon />}/>)}
	 </ul>)
}

function MenuItem(props){
	return (
		<>
		<li className="Menu-item">
			<Link to={props.link}><span>{props.icon}</span> <span className="text"> {props.text} </span></Link>
		</li>
		
		</>
	)
}