import React from "react";
import { Blog } from "./Blog/Blog";
import { RightSidebar } from "./right";
import "../styles/main.scss";

import logo from "../images/top.jpg";

import PrimeReact from "primereact/utils";
import { Menu } from "primereact/menu";

import { MenuItem } from "primereact/api";

PrimeReact.ripple = true;

class KotorzMainComponent extends React.Component {
  items: MenuItem[] = [
    {
      label: "Aktualności",
    },
    {
      label: "Ewangelia na dziś",
    },
    {
      label: "Odeszli od nas...",
    },
    {
      label: "Ochrzczeni",
    },
    {
      label: "Galeria",
    },
  ];

  render() {
    return (
      <div className="page p-reset p-component p-px-6">
        <div className="p-grid">
          <div className="page__header p-col-12 p-d-flex p-p-0">
            <img src={logo} className="" />
          </div>
          <div className="p-col-12 p-p-0">
            <div className="page__main-container ">
              <div className="page__main-container--offset">
                <div className="p-grid">
                  <div className="left-column p-col-3 p-pt-5 p-pl-5">
                    <Menu model={this.items} />
                    {/* <Nav className="flex-column">
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
                      </Nav> */}
                  </div>
                  <div className="p-col">
                    <h1 className="text-center display-4 text-orange">
                      Aktualności
                    </h1>
                    <Blog />
                  </div>
                  <div className="p-col-3">
                    <RightSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KotorzMainComponent;
