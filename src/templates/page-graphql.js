import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout/layout";
import { Section } from "../components/Section/section";

export const query = graphql`
  query ($id: String!) {
    contentstackPage(id: { eq: $id }) {
      url
      id
      page_components {
        hero_banner {
          banner_image {
            url
          }
          banner_title
          banner_description
        }
      }
    }
  }
`;

const PageTemplate = ({ data: { contentstackPage } }) => {
  const hero_banner = contentstackPage?.page_components[0]?.hero_banner;

  return (
    <Layout>
      {!hero_banner ? null : <Section contentstackPage={contentstackPage} />}
    </Layout>
  );
};

export default PageTemplate;
