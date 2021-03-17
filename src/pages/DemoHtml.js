import "../styles/DemoHtml.css";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo192.png";

class DemoHtml extends Component {
  render() {
    const { history, match, location } = this.props;
    console.log(history, match, location);
    return (
      <Fragment>
        <header>Ini Header</header>
        <div className="line-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          quam?
        </div>
        <div id="baris-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fugit.
        </div>
        {/* <a href="/"> */}
        <Link
          to={{
            pathname: "/",
            state: {
              code: 1,
            },
          }}
        >
          <p>Go to App</p>
        </Link>
        <Link
          to={{
            pathname: "/",
            state: {
              code: 2,
            },
          }}
        >
          <p>Go to App 2</p>
        </Link>
        {/* </a> */}
        <div className="container">
          <div className="box sticky">sticky</div>
          <div className="box relative">relative</div>
          <div className="box absolute">absolute</div>
          <div className="box fixed">fixed</div>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <img src={logo} alt="react" />
        </div>
        <footer className="line-1 footer">Ini Footer</footer>
      </Fragment>
    );
  }
}

export default DemoHtml;
