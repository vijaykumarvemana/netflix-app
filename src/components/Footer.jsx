import { Container, Row, Col, Button} from "react-bootstrap";

const Footer = () => {
  return (
    
      
        <section className="bg-dark">

            <Container className="container-fluid bg-dark ">
            <Row>
        <Col >
        <div>

        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        </div>
        
        </Col>
        <Col></Col>
          </Row>
          <Row className="text-white">
              <Col className="text-white">
              <div><p >Audio and Subtitles</p></div>
              <div><p>Media Center</p></div>
              <div> <p>Privacy</p>
                  </div>
              <div><p>Contact Us</p></div>
              <Button variant="outline-secondary" className="text-white mb-2">Service Code</Button>
              <div><small>@ 1997-2021 Netflix,Inc, (afkafdjaljf)</small></div>
              
              </Col>
              <Col  className="text-white " ><p>Audio Description</p>
              <p>Investment Relations</p>
              <p>Legal Notices</p>
             
              </Col>
              <Col className="text-white "><p>help center</p>
              <p>Gift Card</p>
              <p>Cookies Center</p>
              <p>help center</p> </Col>
              <Col className="text-white "><p>help center</p>
              <p>Gift Card</p>
              
              <p>help center</p> </Col>
          </Row>
          
            
            </Container>
          
        </section>
    
  );
};

export default Footer;