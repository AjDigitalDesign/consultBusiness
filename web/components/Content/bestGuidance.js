import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const StyledGuidance = styled.section`
  position: relative;
  padding: 30px 0;
  .best-guidance-area {
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
    padding: 40px 0;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      padding: 90px 0;
    }
    header {
      > h2 {
        color: rgb(255, 255, 255);
        font-weight: 600;
        text-align: center;
        text-transform: capitalize;
      }
    }
  }

  .credibility-section-area {
    position: relative;
    margin-top: -30px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin-top: -70px;
      text-align: center;
    }
  }

  .credibility-section {
    position: relative;
    background-color: #fff;
    padding: 30px 0;
    box-shadow: 0px 0px 19.68px 4.32px rgba(0, 0, 0, 0.05);
    .single-credibility-item {
      padding: 15px 0;
      > span {
        display: block;
        font-size: 1.5rem;
        margin: 0;
        font-weight: bold;
        line-height: 1.1;
        color: rgb(11, 15, 51);
      }
      > hr {
        background-color: rgb(58, 238, 160);
        height: 2px;
        width: 37px;
        margin-left: 0;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          margin: 10px auto;
        }
      }
    }
  }
`;

const bestGuidance = () => {
  return (
    <StyledGuidance>
      <div className="best-guidance-area">
        <div className="container">
          <header className="section-heading">
            <h2>You Always Get the Best Guidence</h2>
          </header>
        </div>
      </div>
      <section className="credibility-section-area">
        <div className="container">
          <div className="credibility-section">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="single-credibility-item">
                    <span className="item-count">656 +</span>
                    <hr />
                    <h5>Projects Completed</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-credibility-item">
                    <span className="item-count">360 +</span>
                    <hr />
                    <h5>Satisfied customers</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-credibility-item">
                    <span className="item-count">225 +</span>
                    <hr />
                    <h5>Awwards Received</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledGuidance>
  );
};

export default bestGuidance;
