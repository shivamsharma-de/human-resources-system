import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-success">
                <a className="navbar-brand" href="#">SNARS Human Resources System</a>
                <form className="form-inline my-2 my-lg-0">
                <span className="navbar-text text-white small text-uppercase mr-3">Employee Search:</span>
                <input className="form-control mr-sm-2" type="search" placeholder="Enter Employee ID" aria-label="Search" />
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Navbar;