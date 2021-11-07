
import { Container,Row,Col} from 'react-bootstrap';
import LeftSideBar from "./components/LeftSideBar"
import NewsFeed from './components/NewsFeed/NewsFeed'
function App() {
  return (
        <>
        <Container fluid p>
          <Row>
            <LeftSideBar />
            <Col md={{span:6,offset:1}}>
              <NewsFeed />
            </Col>
            <Col sm="4">right side bar</Col>
          </Row>
         
        </Container>
       
       
        </> 
  );
}

export default App;
