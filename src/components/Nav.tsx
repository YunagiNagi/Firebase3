import * as React from "react";
import { func } from "prop-types";
import { render } from "react-dom";

export interface NavProps { compiler: string; framework: string; }

export class Nav extends React.Component<NavProps, {}> {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <a className="navbar-brand" href="#">Navbar</a>
        <NavButton />
        <NavContent />
      </nav>
    );
  }
}

function NavButton() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon"></span>
  </button>
  );
}

function NavContent() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <NavItem1 />
        <NavItem2 />
        <NavItem3 />
        <NavItem4 />
      </ul>
      <NavForm />
    </div>
  );
}

function NavItem1() {
  return (
    <li className="nav-item active">
      <a className="nav-link" href="#">
        Home
        <span className="sr-only">
          (current)
        </span>
      </a>
    </li>
  );
}

function NavItem2() {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">
        Link
      </a>
    </li>
  );
}

function NavItem3() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
  );
}

function NavItem4() {
  return (
    <li className="nav-item">
      <a className="nav-link disabled" href="#">
        Disabled
      </a>
    </li>
  );
}

function NavForm() {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn btn-outline-info my-2 my-sm-0"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}