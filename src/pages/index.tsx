import * as React from "react";
import { Info } from "@components/info";
import { Hi } from "@components/hi";
import { Projects } from "@components/projects";
import { WorkExperiences } from "@components/work-experiences";
import { OpenSourceExperiences } from "@components/open-source-experiences";
import { Stacks } from "@components/stacks";
import { Footer } from "@components/footer";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div
      id="container"
      className="flex font-PT flex-col items-center w-full lg:py-10 py-5"
    >
      <main className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row-dense w-full max-w-screen-md_lg px-2">
        <Info />
        <section className="col-span-2 font-PT lg:text-sm text-xs">
          <div>
            <Hi />
            <WorkExperiences />
            <OpenSourceExperiences />
            <Projects />
            <Stacks />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resume | YTW</title>;
