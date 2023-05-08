import React from "react";

export const Section = ({ contentstackPage }) => {
  const { url, page_components } = contentstackPage;

  const banner = page_components[0].hero_banner;

  return (
    <section>
      <h1>{url}</h1>
      <div>
        <img src={`${banner?.banner_image?.url}`} alt="banner" />
        <h3>{banner?.banner_title}</h3>
        <p>{banner?.banner_description}</p>
      </div>
    </section>
  );
};