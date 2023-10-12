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
        lg:[&:not(:first-child)]:mt-3
      "
    >
      <h5 className="mb-1 text-lg font-bold">
        {link == null ? (
          title
        ) : (
          <a
            target="_blank"
            href={link}
            className="font-bold lg:text-lg text-base underline underline-offset-4 transition-all cursor-pointer hover:text-blue-600"
          >
            {title}
          </a>
        )}
        {isArchived && (
          <span className="ml-3 text-sm text-gray-400">archived</span>
        )}
      </h5>
      <span className="text-md">{description}</span>
      <p className="display:inline mt-1 text-gray-500">
        -{" "}
        {stacks.map((s, index) =>
          index === stacks.length - 1 ? `${s}` : `${s}, `
        )}
      </p>
    </div>
  );
};
