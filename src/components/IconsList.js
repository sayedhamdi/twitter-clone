import {RiHome7Fill,RiFileList2Line} from 'react-icons/ri';
import {HiHashtag} from "react-icons/hi"
import {IoIosNotificationsOutline} from "react-icons/io"
import {AiOutlineMail} from "react-icons/ai"
import {BiBookmark} from "react-icons/bi"
import {CgProfile,CgMoreO} from "react-icons/cg"


const MENU_ITEMS =[
	{text:'Home',icon:RiHome7Fill,link:'/home'},
	{text:'explore',icon:HiHashtag,link:'/explore'},
	{text:'notifications',icon:IoIosNotificationsOutline,link:'/notifications'},
	{text:'Message',icon:AiOutlineMail,link:''},
	{text:'Bookmark',icon:BiBookmark,link:''},
	{text:'Lists',icon:RiFileList2Line,link:''},
	{text:'Profile',icon:CgProfile,link:''},
	{text:'More',icon:CgMoreO,link:''}
	
]
export default MENU_ITEMS