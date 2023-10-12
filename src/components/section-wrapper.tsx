import * as React from "react";
import { clsx } from "clsx";

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({
  title,
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <div
      className={clsx(
        "lg:[&:not(:first-child)]:mt-[1rem]",
        "sm:first:mt-3",
        "lg:[&_p]:leading-6",
        "lg:[&_p]:tracking-[1.15px]",
        "leading-[20px]",
        "tracking-[1px]",
        className
      )}
    >
      <div className="lg:p-2 p-[6px]">
        <h4 className="lg:mb-4 tracking-[3px] mb-2 font-lg font-bold">
          <span className="bg-gray-700 text-white pr-3">{title}</span>
        </h4>
        {children}
      </div>
    </div>
  );
};
