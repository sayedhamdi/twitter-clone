
import { useEffect } from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import LeftSideBar from "./components/LeftSideBar"
import NewsFeed from "./components/NewsFeed/NewsFeed"
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import MainRouter from './MainRouter';

function App() {

  let navigate = useNavigate();
  let [isAuth,setIsAuth] = useState(false)
  // logique ithabet el user aandou token fel storage ->yabaathlou lel serveur 
  useEffect(()=>{
  //  setisAuth(localStorage.getItem("uID")!=null)
    if (isAuth){
      navigate("/home")
    }
    console.log("Component mounted");
  },[isAuth])
  return (
        <>
            <Container fluid p>
            <Row>
            {isAuth && <LeftSideBar /> }
            <Col sm={{span: (isAuth)?6:12  }}>
      {/*<MainRouter setIsAuth={setIsAuth}/> */}
      <NewsFeed />
            </Col>
            {isAuth && <Col sm="3">
              <Button variant="danger"onClick={()=>setIsAuth(false)}>Logout</Button>
              </Col> }
            </Row>
          </Container>
        </> 
  );
}

export default App;
