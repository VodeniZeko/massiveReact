import React from "react";

import ContentSingleItem from "./ContentSingleItem";
import ContentNavigation from "./ContentNavigation";
import ContentHero from "./ContentHero";

const navLinks = [
  "Medicare Part A",
  "Medicare Supplements",
  "Prescription Plans",
];

const ContentSection = ({ data }) => {
  return (
    <>
      {/* <div className="flex flex-col max-w-screen-xl "> */}
      <ContentHero />
      <div className="flex divide-x-2 divide-gray-700 ml-1">
        {navLinks.map((link) => (
          <ContentNavigation text={link} />
        ))}
      </div>
      {data.map((each) => (
        <ContentSingleItem key={each.id} item={each} />
      ))}
      {/* </div> */}
    </>
  );
};

export default ContentSection;
