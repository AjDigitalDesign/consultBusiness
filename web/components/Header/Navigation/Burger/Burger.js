import React from 'react'
import {bool, func} from 'prop-types'
import styled from 'styled-components';

import {StyledBurger} from "./Burger.styled";

const NavBarDefaultWrapper = styled.nav`
        display: none;
         @media(max-width: 767px){
            display: block;
         }

         @media(min-width: 768px){
             display: none;
         }

         .navbar-brand a img{
            width: 110px;
         }

`;



const Burger = ({open, setOpen}) =>{
    return (
        <NavBarDefaultWrapper className="navbar-default">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="navbar-header navbar-header-custom">
                        <div className="navbar-brand">
                            <a>
                                <img src="consult_business.png" alt="" />
                            </a>
                        </div>
                        <StyledBurger open={open} onClick={() => setOpen(!open)}>
                            <div />
                            <div />
                            <div />
                        </StyledBurger>
                    </div>
                </nav>
            </div>
        </NavBarDefaultWrapper>
    )
};

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;