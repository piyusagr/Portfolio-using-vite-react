import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary bg-secondary fixed-top " data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center px-5 mx-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/service">Service</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/project">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header