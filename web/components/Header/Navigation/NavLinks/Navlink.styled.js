import styled from "styled-components";

export const StyledNavLink = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryWhite};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 1rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  -webkit-box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.19);
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.19);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 50%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0;
    font-weight: 400;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  .navbar-header.navbar-header-custom {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .navbar-brand {
    margin-top: -140px;
    padding-bottom: 20px;
  }

  .navbar-brand a {
    outline: none;
    text-decoration: none;
  }

  .navbar-brand a img {
    width: 110px;
  }

  .navbar-menu-item ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .navbar-menu-item ul li {
    padding-bottom: 10px;
  }

  .navbar-menu-item ul li a {
    font-weight: 400;
  }

  .navbar-menu-item ul .active a {
    color: ${({ theme }) => theme.PrimaryBlue};
  }
`;
