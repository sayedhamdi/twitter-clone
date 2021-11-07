import './HeaderTab.css'
export default function HeaderTab({text,cornerIcon}){
	return (
		<div className="header-tab">
			<h4>{text}</h4>	
			<span>{cornerIcon}</span>
			
		</div>
	)
}