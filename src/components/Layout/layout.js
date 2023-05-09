import React from "react";
import { Header } from "../Header/header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
