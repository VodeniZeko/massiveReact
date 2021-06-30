import React from "react";

import SingleItem from "./SingleItem";
import ContentNavigation from "./ContentNavigation";
import ContentHero from "./ContentHero";

const navLinks = [
  "Medicare Part A",
  "Medicare Supplements",
  "Prescription Plans",
];

const ContentSection = ({ data }) => {
  return (
    <div className="flex flex-col max-w-screen-xl">
      <ContentHero />
      <div className="flex max-w-screen-xl">
        {navLinks.map((link) => (
          <ContentNavigation text={link} />
        ))}
      </div>
      {data.map((each) => (
        <SingleItem key={each.id} item={each} />
      ))}
    </div>
  );
};

export default ContentSection;
