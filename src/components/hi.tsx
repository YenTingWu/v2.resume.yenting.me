import * as React from "react";
import { SectionWrapper } from "@components/section-wrapper";

export const Hi = () => {
  return (
    <SectionWrapper title="HI" className="hi">
      <div
        className="
          lg:[&_p:not(:first-child)]:mt-[0.7rem]
          [&_p:not(:first-child)]:mt-[0.4rem]
        "
      >
        <p>
          I'm YenTing Wu, an engineer driven by self-motivation, curiosity, and
          strong communication skills. My enthusiasm for being a software
          engineer stems from my ability to generate ingenious concepts and
          bring them to life. I prioritize aspects like user experience, design,
          and effective communication.
        </p>
        <p>
          I adopt a top-down approach to my thinking process. When I tackle new
          subjects, I first grasp the overarching "why," then delve into the
          specifics by asking questions. The answers to these inquiries form a
          comprehensive map, allowing me to interconnect each element of the
          system seamlessly.
        </p>
        <p>
          Outside of programming, I find joy in activities like traveling, river
          trekking and rafting. The wonders of nature consistently spark my
          creativity.
        </p>
      </div>
    </SectionWrapper>
  );
};
