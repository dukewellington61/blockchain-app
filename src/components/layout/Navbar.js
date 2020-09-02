import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link className="nav-link active" to="/" style={{ color: "white" }}>
          &nbsp;&nbsp;testBlockChain
        </Link>
      </nav>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
