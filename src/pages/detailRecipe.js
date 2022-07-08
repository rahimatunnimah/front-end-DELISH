import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./detailRecipe.css";
import imageRecentRecipe1 from "../assets/Rectangle 4.png";

function AddRecipe() {
  return (
    <>
      {/* Navbar */}
      <Navbar>
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="header-landing" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="header-landing" href="#link">
                Add Recipe
              </Nav.Link>
              <Nav.Link className="header-landing" href="#link">
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="title-food">Loream Sandwich</div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-3 mt-5">
          <div className="card card-add-recipe mt-5">
            <img src={imageRecentRecipe1} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <div className="title-ingredients">Ingredients</div>
          <div className="ingredients">
            - 2 eggs - 2 tbsp mayonnaise - 3 slices bread - a little butter - ⅓
            carton of cress - 2-3 slices of tomato or a lettuce leaf and a slice
            of ham or cheese - crisps , to serve
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <div className="title-video">Video Step</div>
          <Button
            className="btn-regis"
            variant="warning"
            type="submit"
          ></Button>
        </div>
      </div>

      {/* footer */}
      <div className="row footer justify-content-center">
        <div className="col-md-5">
          <div className="text-center">
            <h2 className="footer-title">Eat, Cook, Repeat</h2>
            <p>Share your best recipe by uploading here !</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
