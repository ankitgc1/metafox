import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Row, Col, Button} from 'react-bootstrap';
import logo from './logo.png'; 
import bgImg from './images/bg.png'
import dis from './images/discord.png'
import mid from './images/medium.png'
import twitter from './images/twitter.png'
// import "http://fonts.cdnfonts.com/css/akira-expanded" 
                
function App() {
  const styles = {
    backgroundColor: 'rgba(0, 0, 0)',
    backgroundImage: 'url('+bgImg+')',
    // opacity: '0.5',  
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundSize: 'cover',
    minHeight: '100%',
    width: '100%',
    height: '100vh'
  };
  return (
    <main style={styles}>
      <Navbar expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home"> 
          <img
            src={logo}
            width="100"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link>
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://metafox.medium.com/">
                  <img className="round"
                    alt=""
                    src={mid}
                    width="30"
                    height="30"
                  />
                </a>
              </Nav.Link>
              <Nav.Link>
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://twitter.com/metafoxdao">
                  <img className="round"
                    alt=""
                    src={twitter}
                    width="30"
                    height="30"
                  />
                </a>
              </Nav.Link>
              <Nav.Link>
                <a className="socail" rel="noopener noreferrer" target="_blank" href="https://discord.gg/8B9QYp89s">
                  <img className="round"
                    alt=""
                    src={dis}
                    width="30"
                    height="30"
                  />
                </a>
              </Nav.Link>
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="middle">
        <Row className="d-flex justify-content-center text-center white">
          <h1 className="heading">METAFLEX</h1>
          <h1 className="heading">DAO</h1>
        </Row>
        <Row className="d-flex justify-content-center text-center white">
          <h3 className="para">METAFLEX IS FIRST MEME RELATED DECENTRALIZED RESERVE CURRENCY.</h3>
        </Row>
        <Row className="d-flex justify-content-center text-center white">
          <h3 className="para">WHICH IS BACKED BY BASKET OF CRYPTO ASSETS IN TREASURY.</h3>
        </Row>
        <Row className="d-flex justify-content-center text-center white">
          <h3 className="para">$MTFX IS RESERVE CURRENCY RUNNING ON BSC NETWORK WITH SELF-OWNED LIQUIDITY.</h3>
        </Row>
        <Row className="d-flex justify-content-center text-center white">
          <h3 className="para">BUILT WEALTH WITH YOUR FAVORITE TOKEN.</h3>
        </Row>
        {/* <Row className="mt-5 d-flex justify-content-center text-center white">
          <h3><strong className="yellow">FOR MORE INFO JOIN OUR DISCORD</strong></h3>
        </Row> */}
        {/* <Row className="d-flex justify-content-center text-center white">
          <h3><strong>
            <a className="socail" rel="noopener noreferrer" target="_blank" href="https://discord.gg/8B9QYp89">
              <img className="round"
                alt=""
                src={dis}
                width="70"
                height="70"
              />
            </a>
          </strong></h3>
        </Row> */}
        <Row className="mt-5 d-flex justify-content-center text-center white">
          <Col>
            <Button id="action" variant="secondary" size="lg"><span>DASHBAORD</span></Button>{' '}
          </Col>
          <Col>
            <Button id="action" variant="secondary" size="lg"><span>PRESALE</span></Button>{' '}
            </Col>
          
        </Row>
      </Container>

      <Container fluid fixed="bottom" >
        <Row className="d-flex justify-content-center text-center white">
          
        </Row>
      </Container>
    </main>
  );
}

export default App;
