import React from "react";

import { NavbarStyles as S } from "../styles/navbarStyles";

export const NavItem = ({ label = "", url = "/about-us" }) => (
  <li>
    <S.Link to={`/page${url}`}>
      <span>{label}</span>
    </S.Link>
  </li>
);
