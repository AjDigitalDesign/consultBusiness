import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const StyledCta = styled.section`
  position: relative;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.PrimaryBlue};
  .cta-content {
    position: relative;
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;
    padding-top: 10px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      text-align: left;
    }
  }
  .cta-btn {
    text-align: center;
    color: #fff;
    padding-top: 10px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      text-align: right;
    }
    > a {
      box-shadow: 1.216px 6.894px 15.68px 0.32px rgba(0, 0, 0, 0.07);
      background-color: #fff;
      border-radius: 0;
      color: ${({ theme }) => theme.PrimaryBlue};
      font-weight: 400;
      text-transform: capitalize;
    }
    > a:hover {
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
      color: #fff;
    }
  }
`;

const Cta = () => {
  return (
    <StyledCta>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="cta-content">
              <p>Get Expert Financial Advice. Let’s Work!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cta-btn">
              <Link href="/">
                <a className="btn">Request a Quote</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StyledCta>
  );
};

export default Cta;
