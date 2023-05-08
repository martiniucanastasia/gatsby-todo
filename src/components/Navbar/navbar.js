import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { NavItem } from "./NavItem/navItem";
import { NavbarStyles as S } from "./styles/navbarStyles";

export const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      contentstackHeader {
        navigation_menu {
          label
          page_reference {
            url
          }
        }
      }
    }
  `);

  return (
    <S.Navbar>
      <S.List>
        {data.contentstackHeader.navigation_menu.map(
          ({ label, page_reference }, idx) => {
            return (
              <NavItem
                key={`${label}-${idx}`}
                label={label}
                url={page_reference[0].url}
              />
            );
          }
        )}
      </S.List>
    </S.Navbar>
  );
};
