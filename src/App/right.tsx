import React from "react";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class RightSidebar extends React.Component {
  render() {
    return (
      <Col sm={3} className="right-column pt-4 pr-4 pb-4 pl-4">
        {/* TODO: change to image */}
        <div className="right-column__row">
          <p className="h4">
            <FontAwesomeIcon icon={["fab", "youtube"]} color="red" /> YouTube
          </p>
        </div>
        <div className="right-column__row">
          <h4 className="h4">Złota reguła</h4>
          <blockquote className="blockquote">
            <p className="mb-0">
              Wszystko więc, co byście chcieli, żeby wam ludzie czynili, i wy im
              czyńcie!
            </p>
            <footer className="blockquote-footer">
              <cite title="Mt 7,12">Mt 7,12</cite>
            </footer>
          </blockquote>
        </div>
        <div className="right-column__row">
          <h4 className="h4">Kancelaria</h4>
          <p>Sprawy duszpasterskie załatwia się dziennie 30 min. po mszy św.</p>
        </div>
        <div className="right-column__row">
          <h4 className="h4">Parafia w mediach</h4>
          <p>Sprawy duszpasterskie załatwia się dziennie 30 min. po mszy św.</p>
        </div>
      </Col>
    );
  }
}
