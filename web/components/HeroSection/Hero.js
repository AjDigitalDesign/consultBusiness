import React from "react";
import Link from "next/link";
import styled from "styled-components";
import theme from "../../styles/theme";
import { FaArrowRight } from "react-icons/fa";

const StyledHero = styled.div`
  position: relative;
  padding: 30px 0;
  background-image: url("/home-hero.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  display: flex;
  flex-flow: column;
  justify-content: left;
  height: 40vh;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 60vh;
  }
  > :before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    background-color: #000;
    opacity: 0.7;
    overflow: hidden;
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    min-height: 30vh;
  }
  .hero-inner-area {
    position: relative;
    height: 100%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      max-width: 600px;
      height: 55vh;
      vertical-align: middle;
      padding-top: 100px;
    }
    > h1 {
      color: ${({ theme }) => theme.primaryWhite};
      text-transform: uppercase;
      font-size: 1.7rem;
      font-weight: 400;
      line-height: 1.5;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 2.5rem;
      }
    }
    > p {
      color: ${({ theme }) => theme.primaryWhite};
    }
    > a {
      background-image: -moz-linear-gradient(
        170deg,
        rgb(49, 67, 238) 0%,
        rgb(54, 152, 200) 48%,
        rgb(58, 236, 161) 100%
      );
      background-image: -webkit-linear-gradient(
        170deg,
        rgb(49, 67, 238) 0%,
        rgb(54, 152, 200) 48%,
        rgb(58, 236, 161) 100%
      );
      background-image: -ms-linear-gradient(
        170deg,
        rgb(49, 67, 238) 0%,
        rgb(54, 152, 200) 48%,
        rgb(58, 236, 161) 100%
      );
      color: ${({ theme }) => theme.primaryWhite};
      border-radius: 0 !important;
      text-transform: uppercase;
      border: 0 !important;
      font-weight: 600;
    }
  }
`;

const Hero = props => {
  return (
    <StyledHero className="hero-section">
      <div className="container">
        <div className="hero-inner-area">
          <h1>Business Consult</h1>
          <p>
            The demands for financial institutions have changed a bit,
            ofuscation is no longer accepted which is why this Consulting
            Business WordPress Theme is so perfect.
          </p>
          <a href="/" className="btn hero-btn-area">
            Our Services
          </a>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
