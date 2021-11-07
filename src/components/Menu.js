import MENU_ITEMS from './IconsList'

export default function Menu(){
 return (
	 <ul style={{listStyleType:'none',}}>
		 {MENU_ITEMS.map(item=><MenuItem text={item.text} icon={<item.icon />}/>)}
	 </ul>)
}

function MenuItem(props){
	return (
		<>
		<li style={{display:'inline-block',color:'#0F1419',fontSize:'20px',padding:'10px 5px',borderRadius:'25px',border:'1px solid black'}}>
			{props.icon} {props.text}
		</li>
		<br/>
		</>
	)
}