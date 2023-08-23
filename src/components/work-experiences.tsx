import * as React from "react";
import { SectionWrapper } from "@components/section-wrapper";
import { Experience } from "./experience";
import data from "../data.json";

export const WorkExperiences = () => {
  const { works } = data;

  return (
    <SectionWrapper title="Work Experience">
      <div>
        {works.map(({ team, link, title, timeRange, overview, details }) => (
          <Experience
            key={`${team}_${title}`}
            team={team}
            link={link}
            title={title}
            timeRange={timeRange as [string | null, string | null]}
            overview={overview}
            details={details}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
