import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import { Navbar } from "../Navbar/navbar";
import { headerStyled as S } from "./styles/headerStyles";

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentstackHeader {
        logo {
          id
          url
        }
      }
    }
  `);

  return (
    <S.Header>
      <Link to="/">
        <img src={data.contentstackHeader.logo.url} alt="logo" />
      </Link>
      <Navbar />
    </S.Header>
  );
};
