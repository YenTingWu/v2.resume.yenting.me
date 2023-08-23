import * as React from "react";

interface ProjectProps {
  title: string;
  link: string;
  description: string;
  stacks: string[];
  isArchived: boolean;
}

export const Project = ({
  title,
  link,
  description,
  stacks,
  isArchived,
}: ProjectProps) => {
  return (
    <div
      className="
        rounded 
        card-grid-item
        [&:not(:first-child)]:mt-1
        lg:[&:not(:first-child)]:mt-4
      "
    >
      <h5 className="mb-1 font-bold">
        {title}
        {isArchived && (
          <span className="ml-3 font-medium text-gray-400">archived</span>
        )}
      </h5>
      <span className="text-md">{description}</span>
      <div className="[&_p]:!leading-[20px]">
        <p className="display:inline text-xs text-gray-500 lg:mt-1">
          -{" "}
          <a target="_blank" className="underline" href={link}>
            {link}
          </a>
        </p>
        <p className="display:inline text-xs text-gray-500">
          -{" "}
          {stacks.map((s, index) =>
            index === stacks.length - 1 ? `${s}` : `${s}, `
          )}
        </p>
      </div>
    </div>
  );
};
