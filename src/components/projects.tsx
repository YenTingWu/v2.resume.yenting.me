import * as React from "react";
import { SectionWrapper } from "@components/section-wrapper";
import { Project } from "@components/project";
import data from "../data.json";

export const Projects = () => {
  const { projects } = data;

  return (
    <SectionWrapper title="Projects" className="projects">
      <div className=" tracking-wider">
        {projects.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </div>
    </SectionWrapper>
  );
};
