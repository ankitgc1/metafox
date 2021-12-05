import './App.css';
import React from 'react';
import {Container, Row, Col, Button, ProgressBar} from 'react-bootstrap';
import bgImg from './images/dash-bg.png'

function Dashboard (){
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
      const bar = {
        height: '3rem',
        backgroundColor: 'rgb(110, 116, 122, 0.5)',
        color: 'white',
        borderRadius: '3rem',
      };
      return (
        <main style={styles}>
    
          <Container className="middle">
            <Row className="d-flex justify-content-center text-center white">
              <h3 className="para">SECURE YOUR $$MTFX TODAY AT DISCOUNED PRICE.</h3>
            </Row>
            <Row className="mt-4 d-flex justify-content-center text-center white">
              <h3 className="para">
                  <ProgressBar style={bar} animated now={60} />
                  </h3>
            </Row>
            <Row className="mt-2 d-flex justify-content-center text-center white">
              <h3 className="blur para">45%</h3>
            </Row>
            <Row className="mt-2 d-flex justify-content-center text-center white">
              <h3 className="blur para">15000/1000000</h3>
            </Row>

            <Row className="mt-5 d-flex justify-content-center text-center white">
                <Col>
                    <Button id="by" variant="secondary" size="lg"><strong>BUY NOW</strong></Button>{' '}
                    </Col>
                
                </Row>
          </Container>
        </main>
      );
}
 
export default Dashboard;