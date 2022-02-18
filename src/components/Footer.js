import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer({ currentPage, handlePageChange}) {
    const email = <FontAwesomeIcon icon={faEnvelope} size="lg" fixedWidth inverse />
    const linked = <FontAwesomeIcon icon={faLinkedin} size="lg" fixedWidth inverse/>
    const git = <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth inverse/>
    return (
<footer className="footer text-center">
<div className="container">
    <div className="row d-flex justify-content-center">
        <div className="col-lg-4 mb-lg-0 d-flex justify-content-center">
            <a className="btn mx-2" href="mailto:testemail@fake.com">{email}</a><a className="btn  mx-2" target="_blank" href="https://www.linkedin.com ">{linked}</a><a className="btn mx-2"  target="_blank" href="https://github.com/T0930">{git}</a>
        </div>
    </div>
</div>
</footer>
);
}
export default Footer;