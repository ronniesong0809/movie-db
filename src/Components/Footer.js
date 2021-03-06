import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Navbar
        sticky="bottom"
        variant="dark"
        className="justify-content-center whiteText"
      >
        <span className="textShadow">
          &copy; 2020 by{" "}
          <a
            href="https://www.github.com/ronniesong0809/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ronnie Song
          </a>
          , All right reserved
        </span>
      </Navbar>
    );
  }
}

export default Footer;
