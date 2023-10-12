import * as React from "react";
import { formatTime } from "@utils/format-time";
import { parseText } from "@utils/parse-text";

interface ExperienceProps {
  team: string;
  link: string | null;
  title: string;
  timeRange: (string | null)[];
  location: string;
  overview: string;
  details: string[];
}

export const Experience = ({
  team,
  link,
  timeRange,
  location,
  title,
  overview,
  details,
}: ExperienceProps) => {
  return (
    <div
      className="
        tracking-wider 
        lg:leading-6 
        leading-2 
        lg:[&:not(:first-child)]:mt-4
        [&:not(:first-child)]:mt-2
      "
    >
      <div>
        <h5>
          {link == null ? (
            <p className="display: inline !tracking-[0.7px]">
              <span className="font-bold text-lg">{team}</span>
            </p>
          ) : (
            <a
              target="_blank"
              className="font-bold lg:text-lg text-base underline underline-offset-4 transition-all cursor-pointer hover:text-blue-600"
              href={link}
            >
              {team}
            </a>
          )}
          <span className="ml-3 font-medium lg:text-base text-sm text-gray-600">
            {title}
          </span>
        </h5>
        <div className="flex justify-between items-center">
          <span className="block mt-1 font-medium lg:text-sm text-xs text-gray-500">
            {formatTime(timeRange[0])} - {formatTime(timeRange[1])}
          </span>
          <span className="block font-medium lg:text-sm text-xs text-gray-500">
            {location}
          </span>
        </div>

        <span className="block mt-1 mb-1">{parseText(overview)}</span>
        <ul className="list-disc list-outside pl-6">
          {details.map((detail) => (
            <li key={detail}>{parseText(detail)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
