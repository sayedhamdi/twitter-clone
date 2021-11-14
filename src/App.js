
import { useEffect } from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import LeftSideBar from "./components/LeftSideBar"
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import MainRouter from './MainRouter';
function App() {
  let navigate = useNavigate();
  let [isAuth,setisAuth] = useState(false)
  // logique ithabet el user aandou token fel storage ->yabaathlou lel serveur 
  useEffect(()=>{
    setisAuth(localStorage.getItem("uID")!=null)
    if (isAuth){
      navigate("/home")
    }else{
        navigate("/login")

    }
    console.log("Component mounted");
  },[isAuth])
  return (
        <>
        <Container fluid p>
          <Row>
            {isAuth && <LeftSideBar /> }
            <Col sm={{span: (isAuth)?6:12  }}>
              <MainRouter />
            </Col>
            {isAuth && <Col sm="3">right side bar</Col> }
          </Row>
        </Container>
       
       
        </> 
  );
}

export default App;
