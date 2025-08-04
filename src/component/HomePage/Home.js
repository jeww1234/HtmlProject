import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.style.css";
import logo from "./logo.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
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
        <Container>
          <Row>
            <Col lg={6} className="d-flex align-items-center">
              <Image
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMTBfMTk5%2FMDAxNTc4NjQ2Njk0MTI5.fp_neMAomjADXyPfhdf8QoTiEIMRhEOkAY8FFJp8gWgg.b_AQcp2R7_edJX_hE_ECoDXdn7l_DlHM_F4DqGn9JwQg.JPEG.p0y0q%2F01.jpg&type=sc960_832"
                style={{ width: "100%", height: "95%", objectFit: "cover" }}
              ></Image>
            </Col>

            <Col lg={6} className="d-flex align-items-center">
              <Image
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMzBfMjE0%2FMDAxNjQwODQ2NTU2MDcy.2ixBxyhfssPYA_1uzDrgolah4qcdyO5T3IXuHNoa1i8g.WjV8zErMD6S4WEqU2js5SI_mgVsMte9qaL_Vs8Femsgg.JPEG.ddalki5920%2F1640846516010.jpg&type=sc960_832"
                style={{ width: "100%", height: "95%", objectFit: "cover" }}
              ></Image>
            </Col>
          </Row>
        </Container>
      </div>

      <Row className="w-100 m-0">
        <Col
          lg={6}
          md={12}
          className="bg-black p-0 d-flex align-items-center justify-content-center"
          style={{ height: "8vh" }}
        >
          <h5 className="text-white m-0">공지사항</h5>
        </Col>
        <Col
          lg={6}
          md={12}
          className="p-0 d-flex align-items-center justify-content-center"
          style={{ height: "8vh" }}
        >
          <h5 className="text-center m-0">전 상품 공짜</h5>
        </Col>
      </Row>

      <div className="bg-success p-5 text-center">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col lg={4} className="d-flex justify-content-center">
              <Container>
                <Image
                  className="reward-logo"
                  src={logo}
                  url="#"
                />
              </Container>
            </Col>
            <Col lg={8} className="d-flex flex-column justify-content-center">
              <div className="reward-text">
                <h3>K-Coffee 특별한 혜택, 스타벅스 리워드</h3>
                <div>
                  <h5>
                    K-Coffee 회원이세요? 로그인을 통해 나만의 리워드를
                    확인해보세요.
                  </h5>
                  <h5>
                    K-Coffee 회원이 아니세요? 가입을 통해 리워드 혜택을
                    즐기세요.
                  </h5>
                  <div>
                    <Button className="m-2 p-1">로그인</Button>
                    <Button className="m-2 p-1">회원가입</Button>
                  </div>
                </div>
              </div>
              <div className="reward-text">
                <h5>
                  회원 가입 후, 모바일 카드를 "나에게 선물하기"로 구매하시고,
                  편리하게 등록하세요!
                </h5>
                <h5>
                  카드를 등록하여 K-Coffee 리워드 회원이 되신 후 첫 구매를
                  하시면 무료 음료쿠폰을 드립니다!
                </h5>
                <Button className="p-1">K-Coffee 모바일 카드 선물하기</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="Home-footer">
        <Container>
          <Row>
            <Col lg={4} sm={12} className="Home-footer-img d-flex">
              <Container className="d-flex justify-content-center">
                <Image
                  src="https://image.istarbucks.co.kr/upload/common/img/main/2025/2025_summer2_promotion_beans_250715.png"
                  alt="#"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Container>
            </Col>
            <Col
              lg={8}
              sm={12}
              className="d-flex flex-column justify-content-center text-center"
            >
              <h2>K-pop Coffee 보내는 특별한 커피 러브레터</h2>
              <p>보야지 블렌드 250g</p>
              <p>아이스커피로 즐길 때 더욱 매력적인</p>
              <p>보야지 블렌드를 만나보세요</p>
              <Button className="m-2">자세히 보기</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="text-white">
        <Container fluid className="bg-black py-4 px-5">
          <Row className="text-center">
            <Col sm={12} md={4} className="mb-3 mb-md-0">
              <h5 className="fw-bold mb-2">회사 정보</h5>
              <p>㈜스타벅스커피코리아</p>
              <p>서울특별시 종로구 종로123</p>
              <p>사업자등록번호: 123-45-67890</p>
              <p>대표자: 홍길동</p>
            </Col>

            <Col sm={12} md={4} className="mb-3 mb-md-0">
              <h5 className="fw-bold mb-2">고객센터</h5>
              <p>대표번호: 1234-5678</p>
              <p>이메일: help@starbucks.co.kr</p>
              <p>운영시간: 평일 09:00 ~ 18:00</p>
            </Col>

            <Col sm={12} md={4}>
              <h5 className="fw-bold mb-2">협력사</h5>
              <p>물류 파트너: ABC로지스</p>
              <p>마케팅 제휴: XYZ미디어</p>
              <p>채용 정보</p>
              <p>사이트맵</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
