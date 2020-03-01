import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/theme";
import Link from "next/link";

const MainNavbar = styled.nav`
    position: relative;
    display: none;
    @media(min-width: ${({theme}) => theme.tablet}){
        display: block;
    }
    .navbar{
        padding: 0.5rem 0 !important;
    }
    
    .navbar-header-custom{
      padding: 15px 0 10px 0;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    
    .navbar-menu-item ul{
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
       
    }
    
    .navbar-menu-item ul li{
      transition: background .3s ease;
      }
    
    .navbar-menu-item ul li a{
      padding: 21px 1.5rem;
      color: ${({theme}) => theme.primaryDarkBlue};
      font-weight: 600;
      text-transform: uppercase;
      line-height: 2.242;
      outline: none;
      text-decoration: none;
    }
    .navbar-menu-item ul li a:last-child{
      padding-right: 0;
    }

    .navbar-menu-item ul li a:hover{
        color: ${({theme}) => theme.PrimaryBlue}
    }


    .navbar-menu-item ul li a:active{
        color: ${({theme}) => theme.PrimaryBlue}
    }


    .navbar-brand a{
        outline: none;
        text-decoration: none;
    }

    .navbar-brand a img{
        width: 110px;
    }
    
`;


const NavMenu = (props) => {

    return(
        <MainNavbar className="navbar-default">
            <div className="container">
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
            </div>
        </MainNavbar>
    )
};

export default  NavMenu;


