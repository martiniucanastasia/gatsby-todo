import * as React from "react";
import { Layout } from "../components/Layout/layout";
import Seo from "../components/Seo/seo";

const HomePage = () => {
  return <Layout />;
};

export const Head = () => <Seo title="Home Page" />;

export default HomePage;
