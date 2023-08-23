import * as React from "react";
import { SectionWrapper } from "@components/section-wrapper";
import data from "../data.json";

export const Stacks = () => {
  const { stacks } = data;

  return (
    <SectionWrapper title="Stacks">
      <div className="tracking-wider lg:leading-6 leading-2">
        <div>
          {Object.entries(stacks).map(([key, value]) => (
            <div
              className="
                flex 
                w-full 
                lg:[&:not(:first-child)]:mt-2
                sm:[&:not(:first-child)]:mt-1
              "
              key={key}
            >
              <span
                className="
                  min-w-[66px]
                  sm:flex-1
                  font-bold
                  text-right
                  whitespace-nowrap	
                "
              >
                {key}
              </span>
              <span
                className="
                  lg:flex-[5]
                  lg:ml-5
                  sm:flex-[9]
                  sm:ml-3
                  ml-2
                  flex-[5]
                "
              >
                {value.map((v, i) =>
                  i === value.length - 1 ? `${v}` : `${v}, `
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
