import * as React from "react";

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <div
      className="
        lg:[&:not(:first-child)]:mt-[1rem] 
        first:mt-3
        lg:[&_p]:leading-6 
        lg:[&_p]:tracking-[1.15px]
        leading-[20px]
        tracking-[1px]
        "
    >
      <div className="p-2">
        <h4 className="lg:mb-4 tracking-[3px] mb-2 font-lg font-bold">
          <span className="bg-gray-700 text-white pr-3">{title}</span>
        </h4>
        {children}
      </div>
    </div>
  );
};
