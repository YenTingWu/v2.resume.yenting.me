import * as React from "react";
import { SectionWrapper } from "@components/section-wrapper";
import data from "../data.json";

export const Stacks = () => {
  const { stacks } = data;

  return (
    <SectionWrapper title="Stacks">
      <div className="card-content tracking-wider lg:leading-6 leading-2">
        <div className="grid grid-cols-6 lg:max-w-full max-w-sm gap-x-5 gap-y-2">
          {Object.entries(stacks).map(([key, value]) => (
            <React.Fragment key={key}>
              <span className="font-bold lg:col-span-1 col-span-2 text-right">
                {key}
              </span>
              <span className="lg:col-span-5 col-span-4">
                {value.map((v, i) =>
                  i === value.length - 1 ? `${v}` : `${v}, `
                )}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
