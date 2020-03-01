import React from 'react';
import Link from "next/link";
import styled from "styled-components";
import {FaPhone} from "react-icons/fa";
import {StyledTopbar} from "./Topbar.styled";
import {theme} from "../../../../styles/theme";


const TopbarContent = styled.div`
  padding: 7px 0;
  color: #0b0f33;
  font-weight: 600;
  line-height: 1.5;
  font-size: 1.2rem;
  
  @media(max-width: ${({theme}) => theme.mobile}){
    text-align: center;
  }
  
  @media(min-width: ${({theme}) => theme.tablet}){
    text-align: right;
  }
  
  a{
    color: ${({theme}) => theme.PrimaryBlue};
    text-decoration: none;
    outline: none;
  }
  span{
    color: rgb(135, 135, 135);
    font-family: "Hind",serif;
    margin-right: 3px;
  } 
`;

const Topbar = () =>{

    return(
        <StyledTopbar>
            <div className="container">
                <TopbarContent>
                    <span className="call-text">Call US</span>
                    <a href="tel:18004961422">(1800) 496 - 1422</a>
                </TopbarContent>
            </div>
        </StyledTopbar>
    )
};

export default Topbar;