import styled from "@emotion/styled";
import { Link } from "gatsby";

export const NavbarStyles = {
  Navbar: styled.nav`
    display: flex;
    justify-content: center;
  `,

  List: styled.ul`
    display: flex;
    list-style-type: none;
    gap: 20px;
  `,

  Link: styled(Link)`
    color: black;
    text-decoration: none;
  `,
};
