import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const StyledHomeAbout = styled.section`
  position: relative;
  padding: 30px 0;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 80px 0;
  }
  .about-left-content {
    span.sub-about {
      display: block;
      text-transform: uppercase;
      font-size: 20px;
      font-weight: bold;
      line-height: 1.5;
      z-index: 1;
      margin-bottom: 5px;
    }

    span.sub-about::before {
      content: "";
      position: absolute;
      height: 5px;
      background-color: ${({ theme }) => theme.colorBeforeGreen};
      top: 12px;
      left: 5px;
      width: 10%;
      z-index: -1;
    }
    h1 {
      color: rgb(12, 16, 52);
      font-weight: bold;
      line-height: 1.25;
    }
    p {
      color: rgb(86, 86, 86);
      line-height: 1.5;
      padding-top: 20px;
    }
  }
`;

const HomeAbout = () => {
  return (
    <StyledHomeAbout className="homeabout-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="about-left-content">
              <span className="sub-about">About Us</span>
              <h1>Get The Good Services From Our Experts</h1>
              <p>
                Our goal is to optimise your business relationships by tailoring
                our services to your individual requirements. We strive to build
                a the relationship of trust with every client, for the
                long-term, 70% of our the work is for clients that we have
                served for over 10 years.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-righ">
              <img className="img-fluid" src="/IMGholder.jpg" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </StyledHomeAbout>
  );
};

export default HomeAbout;
