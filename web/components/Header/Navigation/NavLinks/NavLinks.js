import React from "react";
import { useRouter } from "next/router";
import { bool, func } from "prop-types";
import Link from "next/link";
import { StyledNavigationHeader } from "../Navigation.styled";
import Burger from "../Burger/Burger";
import { StyledNavLink } from "./Navlink.styled";

const NavLink = ({ open }) => {
  const router = useRouter();
  let menuList = [
    {
      id: 1,
      label: "Home",
      slug: "/"
    },
    {
      id: 2,
      label: "About",
      slug: "/about"
    },
    {
      id: 3,
      label: "Services",
      slug: "/services"
    },
    {
      id: 4,
      label: "Gallery",
      slug: "/gallery"
    },
    {
      id: 5,
      label: "News",
      slug: "/news"
    },
    {
      id: 6,
      label: "Contact",
      slug: "/contact"
    }
  ];
  return (
    <StyledNavLink open={open}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-header navbar-header-custom">
          <div className="navbar-brand">
            <Link href="/">
              <a>
                <img src="/consult_business.png" />
              </a>
            </Link>
          </div>
          <div className="navbar-menu-item">
            <ul className="navbar-items">
              {menuList.map(nav => {
                return (
                  <li
                    className={router.asPath === nav.slug ? "active" : ""}
                    key={nav.id}
                  >
                    <Link href={nav.slug}>
                      <a>{nav.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </StyledNavLink>
  );
};

NavLink.propTypes = {
  open: bool.isRequired
};

export default NavLink;
