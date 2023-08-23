import * as React from "react";

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <div className="card-container">
      <div className="p-2">
        <h4 className="lg:mb-4 mb-2 font-lg font-bold">
          <span className="bg-gray-700 text-white pr-3">{title}</span>
        </h4>
        {children}
      </div>
    </div>
  );
};
