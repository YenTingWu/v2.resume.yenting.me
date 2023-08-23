import * as React from "react";
import { Experience } from "@components/experience";
import data from "../data.json";

export const OpenSourceExperiences = () => {
  const { openSources } = data;
  return (
    <div className="card-container">
      <div className="p-2">
        <h4 className="lg:mb-4 mb-2 font-lg font-bold">
          <span className="bg-gray-700 text-white pr-3">
            Open Source Experience
          </span>
        </h4>
        {openSources.map((o) => (
          <Experience key={`${o.team}_${o.title}`} {...o} />
        ))}
      </div>
    </div>
  );
};
