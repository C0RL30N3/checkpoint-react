import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Container, Form , Navbar, Nav , FormControl , Carousel , Jumbotron , Figure } from 'react-bootstrap';

function App() {
  return (
 <Container>
    <div className="App">
      <div className="Navbar1">
    <Navbar fixed="top" bg="light" variant="light">
    <Navbar.Brand href="#home">Mehdi Voyages</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Offres</Nav.Link>
      <Nav.Link href="#features">Resevations</Nav.Link>
      <Nav.Link href="#pricing">Nous Contactez</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  </div>
   
 <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" id="sub">
    Submit
  </Button>
</Form>
<div className="jumbo">
<Jumbotron style = {{backgroundColor:'beige'}}>
<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://annuairepro-tunisie.com/medias/images/logo/x41385-small.png.pagespeed.ic.-wPxkQEF-5.webp"
  />
  <Figure.Caption>
  
  </Figure.Caption>
</Figure>
  <h1>Mehdi Voyages</h1>
  <p>
Adresse du siège :
16, Rue Imem Ibn Arafa
2037 El Menzah 8
Ariana, Tunisie
<br/>
Directeur Géneral :
Mr.Sofiene MAAOUI
<br/>
70866807
70866808
22674739
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
</div>


<div className="Carousel">
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.authentikusa.com/uploads/legacy_blog/2016/11/7.plus-belles-citations-de-voyage.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.authentikusa.com/uploads/legacy_blog/2016/11/9.plus-belles-citations-de-voyage.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.authentikusa.com/uploads/legacy_blog/2016/11/1.plus-belles-citations-de-voyage.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

    </div>
    </Container>
    
  );
}

export default App;
