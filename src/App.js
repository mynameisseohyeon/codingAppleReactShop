import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";

function App() {
  let [donuts, setDonuts] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar className="NavBar">
        <Container>
          <Navbar.Brand href="#home">Donut shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="*" element={<h1>404 Page</h1>} />
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" />
              <div className="container">
                <div className="row">
                  {donuts.map(function (a, i) {
                    return <Product donuts={donuts[i]} i={i + 2}></Product>; //img파일이 2부터 시작함으로 i + 2를 해주었다
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail donuts={donuts} />} />
        {/*props 설정 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<About />} />
          <Route path="location" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

function Product(props) {
  //상품 목록
  return (
    <div className="col-md-4">
      <div className={`donut donut${props.i}`} />
      <h4>{props.donuts.title}</h4>
      <p>{props.donuts.price}</p>
    </div>
  );
}

function About() {
  //About페이지
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
