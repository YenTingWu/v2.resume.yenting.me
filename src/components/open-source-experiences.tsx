import * as React from "react";
import { SectionWrapper } from "@components/section-wrapper";
import { Experience } from "@components/experience";
import data from "../data.json";

export const OpenSourceExperiences = () => {
  const { openSources } = data;
  return (
    <SectionWrapper title="Open Source Experience">
      <div>
        {openSources.map((o) => (
          <Experience key={`${o.team}_${o.title}`} {...o} />
        ))}
      </div>
    </SectionWrapper>
  );
};
