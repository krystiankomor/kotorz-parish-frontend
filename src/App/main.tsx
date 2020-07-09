import React from "react";
import { Blog } from "./Blog/Blog";
import { RightSidebar } from "./right";
import "../styles/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faEdit,
  faTrashAlt,
  faEyeSlash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import logo from "../images/top.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

library.add(faEdit, faCog, faTrashAlt, faEyeSlash, faYoutube, faPlus);

class KotorzMainComponent extends React.Component {
  render() {
    return (
      <div className="page">
        <Container>
          <Row>
            <Col className="page__header p-0">
              <Image src={logo} fluid />
            </Col>
          </Row>
          <Row>
            <Col className="p-0">
              <div className="page__main-container">
                <div className="page__main-container--offset">
                  <Row className="p-0 m-0">
                    <Col sm={3} className="left-column pt-4 pr-0 pb-4 pl-4">
                      <Nav className="flex-column">
                        <Nav.Link>Aktualności</Nav.Link>
                        <Nav.Link>Ewangelia na dziś</Nav.Link>
                        <Nav.Link>Odeszli od nas...</Nav.Link>
                        <Nav.Link>Ochrzczeni</Nav.Link>
                        <Nav.Link>Galeria</Nav.Link>
                        <Nav.Link>O parafii</Nav.Link>
                        <Nav className="flex-column">
                          <Nav.Link>Historia</Nav.Link>
                          <Nav.Link>Patron</Nav.Link>
                          <Nav.Link>Kościół</Nav.Link>
                          <Nav.Link>Klasztor</Nav.Link>
                          <Nav.Link>Księża</Nav.Link>
                          <Nav.Link>Grobowiec</Nav.Link>
                          <Nav.Link>Nazwy</Nav.Link>
                          <Nav.Link>Szkoła</Nav.Link>
                          <Nav.Link>Okolica</Nav.Link>
                          <Nav.Link>Różne</Nav.Link>
                          <Nav.Link>Pałac w Turawie</Nav.Link>
                          <Nav.Link>Rodzina von Garnier</Nav.Link>
                          <Nav.Link>Właściciele Kotorza</Nav.Link>
                          <Nav.Link>Właściciele Turawy</Nav.Link>
                        </Nav>
                        <Nav.Link>Wspólnoty parafialne</Nav.Link>
                        <Nav className="flex-column">
                          <Nav.Link>Caritas</Nav.Link>
                          <Nav.Link>Chór</Nav.Link>
                          <Nav.Link>Dzieci Maryi</Nav.Link>
                          <Nav.Link>Ministranci</Nav.Link>
                          <Nav.Link>III Zakon</Nav.Link>
                        </Nav>
                        <Nav.Link>Duszpasterstwo</Nav.Link>
                        <Nav.Link>Kancelaria</Nav.Link>
                        <Nav.Link>Administracja</Nav.Link>
                      </Nav>
                    </Col>
                    <Col className="p-4">
                      <h1 className="text-center display-4 text-orange">
                        Aktualności
                      </h1>
                      <Blog />
                    </Col>
                    <RightSidebar />
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default KotorzMainComponent;
