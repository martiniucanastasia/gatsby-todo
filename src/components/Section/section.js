import React from "react";

export const Section = ({ contentstackPage }) => {
  const { url, page_components } = contentstackPage;

  const banner = page_components[0].hero_banner;

  return (
    <section>
      <h2>{`URL is - ${url}`}</h2>
      <div>
        {banner?.banner_image?.url && (
          <img src={`${banner?.banner_image?.url}`} alt="banner" />
        )}
        <h3>{`Title is - ${banner?.banner_title}`}</h3>
        <p>{`Description is - ${banner?.banner_description}`}</p>
      </div>
    </section>
  );
};
