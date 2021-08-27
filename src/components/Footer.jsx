import { Container, Row, Col, Button} from "react-bootstrap";

const Footer = () => {
  return (
    
      
        
        <Container className="bg-dark">
        <Row>
    <Col >
    
    <i class="fab fa-facebook-square"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-youtube"></i>
    
    </Col>
    <Col></Col>
      </Row>
      <Row className="text-white">
          <Col className="text-white">
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
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
      
    
  );
};

export default Footer;