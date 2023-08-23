import * as React from "react";

interface ExperienceProps {
  team: string;
  link: string | null;
  title: string;
  timeRange: [string | null, string | null];
  overview: string;
  details: string[];
}

function formatTime(time: string | null) {
  if (time == null) return "Present";
  return new Date(time).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
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
    <div className="card-content tracking-wider lg:leading-6 leading-2 [&:not(:first-child)]:mt-3">
      <div className="experience-card">
        <h5>
          {link == null ? (
            <p className="display: inline !tracking-[0.7px]">
              <span className="font-bold text-lg">{team}</span>
            </p>
          ) : (
            <a target="_blank" href={link}>
              <span className="font-bold text-lg underline underline-offset-4 transition-all cursor-pointer hover:text-blue-600">
                {team}
              </span>
            </a>
          )}

          <span className="ml-3 font-medium text-base text-gray-500">
            {title}
          </span>
        </h5>
        <span className="block mt-1 font-medium text-sm text-gray-500">
          {formatTime(timeRange[0])} - {formatTime(timeRange[1])}
        </span>

        <span className="block mt-3 mb-1">{overview}</span>
        <ul className="list-disc list-outside pl-6">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
