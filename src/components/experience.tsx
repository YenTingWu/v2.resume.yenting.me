import * as React from "react";
import { formatTime } from "@utils/format-time";
import { parseText } from "@utils/parse-text";

interface ExperienceProps {
  team: string;
  link: string | null;
  title: string;
  timeRange: (string | null)[];
  overview: string;
  details: string[];
}

export const Experience = ({
  team,
  link,
  timeRange,
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
              className="font-bold text-lg underline underline-offset-4 transition-all cursor-pointer hover:text-blue-600"
              href={link}
            >
              {team}
            </a>
          )}

          <span className="ml-3 font-medium text-base text-gray-500">
            {title}
          </span>
        </h5>
        <span className="block mt-1 font-medium text-sm text-gray-500">
          {formatTime(timeRange[0])} - {formatTime(timeRange[1])}
        </span>

        <span className="block mt-2 mb-1">{parseText(overview)}</span>
        <ul className="list-disc list-outside pl-6">
          {details.map((detail) => (
            <li key={detail}>{parseText(detail)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
