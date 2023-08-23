import * as React from "react";
import { SectionWrapper } from "@components/section-wrapper";
import { Stack } from "@components/stack";
import data from "../data.json";

export const Stacks = () => {
  const { stacks } = data;

  return (
    <SectionWrapper title="Stacks">
      <div className="tracking-wider lg:leading-6 leading-2">
        <div>
          {Object.entries(stacks).map(([category, items]) => (
            <Stack key={category} category={category} items={items} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
