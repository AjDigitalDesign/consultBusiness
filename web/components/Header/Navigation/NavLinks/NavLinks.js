import React from 'react';
import {bool, func} from 'prop-types'
import Link from "next/link";
import {StyledNavigationHeader} from "../Navigation.styled";
import Burger from "../Burger/Burger";
import {StyledNavLink} from "./Navlink.styled";





const NavLink = ({open}) => {
    return (
        <StyledNavLink open={open}>
            <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="navbar-header navbar-header-custom">
                        <div className="navbar-brand">
                            <a>
                                <img src="/consult_business.png"/>
                            </a>
                        </div>
                        <div className="navbar-menu-item">
                            <ul className="navbar-items">
                                <li>
                                    <Link href="/index" >
                                        <a>
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a>
                                            About
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a>
                                            Services
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gallery">
                                        <a>
                                            Gallery
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news">
                                        <a>
                                            News
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>
                                            Contact
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </StyledNavLink>


    )
};




NavLink.propTypes = {
    open: bool.isRequired,
};
export default NavLink;