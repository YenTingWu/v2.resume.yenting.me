import * as React from "react";
import data from "../data.json";
import { Experience } from "./experience";

export const WorkExperiences = () => {
  const { works } = data;

  return (
    <div className="card-container">
      <div className="p-2">
        <h4 className="lg:mb-4 mb-2 font-lg font-bold">
          <span className="bg-gray-700 text-white pr-3">Work Experience</span>
        </h4>
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
      </div>
    </div>
  );
};
