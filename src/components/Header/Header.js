import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    HomeRounded,
    Telegram,
} from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css'

const Header = (props) => {
    const pathname = props?.location?.pathname;

    return (
        <Navbar bg="light" expand="lg" className="header" sticky="top">
            <Nav.Link as={NavLink} to="/" className="header_navlink">
                <Navbar.Brand className="header_home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle></Navbar.Toggle>

            <Navbar.Collapse>
                <Nav className="header_left">
                    <Nav.Link as={NavLink} to="/"
                        className={pathname === "/" ? "header_link_active" : "header_link"}>
                        Resume
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/my-projects"
                        className={pathname === "/my-projects" ? "header_link_active" : "header_link"}>
                        My Projects
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/about-me"
                        className={pathname === "/about-me" ? "header_link_active" : "header_link"}>
                        About Me
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/contact"
                        className={pathname === "/contact" ? "header_link_active" : "header_link"}>
                        Contact
                    </Nav.Link>
                </Nav>

                <div className="header_right">
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].link} key={key}>{resumeData.socials[key].icon}</a>
                    ))}
                </div>

                <CustomButton text="Hire Me" icon={<Telegram />} />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);
