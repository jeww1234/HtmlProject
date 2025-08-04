import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.style.css";
import logo from "./logo.jpg";

const Home = () => {
  return (
    <div className="Home">
      <Navbar expand="lg" className="Home-Navbar-bg sticky-top">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={logo}
              alt="#"
              style={{ maxWidth: "60px", height: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Home-Navbar-Nav collapse-bg">
              <Nav.Link className="pe-3 ps-3 fs-6 fw-bold Home-Collapse-color">
                COFFEE
              </Nav.Link>
              <Nav.Link className="pe-3 ps-3 fs-6 fw-bold Home-Collapse-color">
                MENU
              </Nav.Link>
              <Nav.Link className="pe-3 ps-3 fs-6 fw-bold Home-Collapse-color">
                STORE
              </Nav.Link>
              <Nav.Link className="pe-3 ps-3 fs-6 fw-bold Home-Collapse-color">
                ESG
              </Nav.Link>
              <Nav.Link className="pe-3 ps-3 fs-6 fw-bold Home-Collapse-color">
                STARBUCKS REWARDS
              </Nav.Link>
              <Nav.Link className="pe-3 ps-3 fs-6 fw-bold Home-Collapse-color">
                CORPORATE SALES
              </Nav.Link>
              <Nav.Link className="pe-3 ps-3 fs-6 fw-bold Home-Collapse-color">
                {" "}
                WHAT`S NEW
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-bg">
        <Container className="text-center text-white py-5"></Container>
      </div>

      <div className="d-flex">
        <Container
          className="bg-black p-0 d-flex align-items-center justify-content-center"
          style={{ height: "8vh", width: "50%" }}
        >
          <h5 className="text-white m-0">공지사항</h5>
        </Container>
        <Container
          className="p-0 d-flex align-items-center justify-content-center"
          style={{ height: "8vh", width: "50%" }}
        >
          <h5 className="text-center m-0">전 상품 공짜</h5>
        </Container>
      </div>

      <div className="bg-success p-5">
        <Container className="d-flex justify-content-center align-items-center">
          <div>
            <Image
              src={logo}
              url="#"
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </div>

          
        </Container>
      </div>


    <div className="Home-footer">
      <Container className="d-flex justify-content-center">
        
        <div className="Home-footer-img">
          <Image src="https://image.istarbucks.co.kr/upload/common/img/main/2025/2025_summer2_promotion_beans_250715.png" alt="#"/>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <h4>123123</h4>
          <p>12312313</p>
          <p>12312313</p>
          <p>12312313</p>
        </div>
        
        </Container>
    </div>







    </div>
  );
};

export default Home;
