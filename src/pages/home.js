import { Container, Navbar, Nav } from "react-bootstrap";
import "./home.css";
import imageAvatar from "../assets/avatar.png";
import imageLanding from "../assets/delicious food.png";
import imageNewRecipe from "../assets/Rectangle 3.png";
import imageRecentRecipe1 from "../assets/Rectangle 4.png";
import imageRecentRecipe2 from "../assets/Rectangle 2.png";
import imageRecentRecipe3 from "../assets/Rectangle 1.png";

function HomePage() {
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
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <img src={imageAvatar} alt="icon login" className="icon-login" />
              Login
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search screen */}
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-7">
              <div className="title-landing">Delish Kitchen</div>
              <div className="input-group flex-nowrap search-landing">
                <span className="input-group-text" id="addon-wrapping">
                  🔍
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="addon-wrapping"
                  placeholder="search food"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img src={imageLanding} className="image-landing" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 side-background"></div>
      </div>

      {/* New Recipe */}
      <div className="row">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="title-new-recipe">
                <h2>New Recipe</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 new-recipe-background">
                <div className="card text-white card-new-recipe">
                  <img
                    src={imageNewRecipe}
                    className="image-new-recipe"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="name-new-recipe">
              Healthy Bone Broth Ramen (Quick & Easy)
            </h2>
            <hr className="line-new-recipe" />
            <p className="ingredients-new-recipe">
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That's right!
            </p>
          </div>
        </div>
      </div>

      {/* 6 Recent Recipe */}
      <div className="row">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="title-six-recent">
                <h2>Popular Recipe</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-3">
            <div className="card card-recent-recipe">
              <img
                src={imageRecentRecipe1}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title name-card-recent">
                Special title treatment
              </h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-recent-recipe">
              <img
                src={imageRecentRecipe2}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title name-card-recent">
                Special title treatment
              </h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-recent-recipe">
              <img
                src={imageRecentRecipe3}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title name-card-recent">
                Special title treatment
              </h5>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-3">
            <div className="card card-recent-recipe">
              <img
                src={imageRecentRecipe1}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title name-card-recent">
                Special title treatment
              </h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-recent-recipe">
              <img
                src={imageRecentRecipe2}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title name-card-recent">
                Special title treatment
              </h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-recent-recipe">
              <img
                src={imageRecentRecipe3}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title name-card-recent">
                Special title treatment
              </h5>
            </div>
          </div>
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

export default HomePage;
