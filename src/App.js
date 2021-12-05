import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import bgImg from './images/bg.png'

// import "http://fonts.cdnfonts.com/css/akira-expanded" 
import {
  Link
} from "react-router-dom";

function App() {
  const styles = {
    backgroundColor: 'rgba(0, 0, 0)',
    backgroundImage: 'url('+bgImg+')',
    // opacity: '0.5',  
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    // backgroundSize: '100%',
    backgroundSize: 'cover',
    minHeight: '100%',
    width: '100%',
    height: '100vh'
  };
  return (
    <main style={styles}>

      <Container className="middle">
        <Row className="d-flex justify-content-center text-center white">
          <h1 className="heading">METAFOX</h1>
          <h1 className="heading">DAO</h1>
        </Row>
        <Row className="d-flex justify-content-center text-center white">
          <h3 className="para">METAFOX IS FIRST MEME RELATED DECENTRALIZED RESERVE CURRENCY.</h3>
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
            <Button id="dash" variant="secondary" size="lg"><strong><Link className="dash" to="/dashboard">DASHBOARD</Link></strong></Button>{' '}
          </Col>
          <Col>
            <Button id="pre" variant="secondary" size="lg"><strong>PRESALE</strong></Button>{' '}
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
