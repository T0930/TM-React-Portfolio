import React from 'react';

function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
    <div className="container">
        <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a onClick = {() => handlePageChange ("Home")}className={currentPage === 'Home' ? "nav-link active py-3 px-0 px-lg-3 rounded js-scroll-trigger" : "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"} href="#home">HOME</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a onClick = {() => handlePageChange ("About")}className={currentPage === 'About' ? "nav-link active py-3 px-0 px-lg-3 rounded js-scroll-trigger" : "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"} href="#about">ABOUT</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a onClick = {() => handlePageChange ("Work")}className={currentPage === 'Work' ? "nav-link active py-3 px-0 px-lg-3 rounded js-scroll-trigger" : "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"} href="#work">WORK</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a onClick = {() => handlePageChange ("Contact")}className={currentPage === 'Contact' ? "nav-link active py-3 px-0 px-lg-3 rounded js-scroll-trigger" : "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"} href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  );
}

export default Header;
