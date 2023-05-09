import React from "react";
import { Header } from "../Header/header";
import { Button } from "../Button/Button";
import { LayoutStyles as S, Article } from "./styles/layoutStyles";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Button>Primary</Button>
      <S.InfoBox>
        <Article>This is article which is triggered like regular CSS</Article>
      </S.InfoBox>
      <div>{children}</div>
    </>
  );
};
