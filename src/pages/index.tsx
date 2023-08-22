import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div
      id="container"
      className="flex flex-col items-center w-full lg:py-10 py-5"
    >
      <main className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row-dense w-full max-w-screen-md_lg px-2">
        <section id="info">
          <div className="pl-2 lg:pl-0">
            <h3 className="antialiased text-2xl font-medium">Yen Ting Wu</h3>
            <p className="mt-2 lg:mb-4 mb-1 text-gray-400 text-sm">
              Software Engineer
            </p>
            <a
              className="text-xs"
              target="_blank"
              href="mailto:a9600125a@gmail.com"
            >
              a9600125a@gmail.com
            </a>
            <span className="flex lg:mt-2 mt-1">
              <a
                className="icons-links"
                target="_blank"
                href="https://github.com/YenTingWu"
              >
                <i className="icons" data-feather="github"></i>
              </a>
              <a
                className="icons-links"
                target="_blank"
                href="https://twitter.com/YenTing09677393"
              >
                <i className="icons" data-feather="twitter"></i>
              </a>
              <a
                className="icons-links"
                target="_blank"
                href="https://yenting.me"
              >
                <i className="icons" data-feather="globe"></i>
              </a>
            </span>
          </div>
        </section>
        <section className="col-span-2 font-PT lg:text-sm text-xs">
          <div>
            {/* <!------------------------------ About ------------------------------> */}

            <div className="card-container mt-2 lg:mt-0">
              <div className="p-2">
                <h4 className="lg:mb-4 mb-2 font-lg font-bold">
                  <span className="bg-gray-700 text-white pr-3">HI</span>
                </h4>
                <div className="card-content">
                  <p>
                    My name is YenTing Wu, a self-motivated software engineer
                    and a creator. My passion for being a software engineer lies
                    in coming up with brilliant ideas with my colleges and
                    enabling them. I take good care about experience, design and
                    communication.
                  </p>
                  <p>
                    I am also an open-source collaborator, mainly contribute to
                    React community. I currently work with Chakra UI team to
                    build the doc site and maintain DevRel. I love to
                    collaborate with people coming from different backgrounds
                    but having the same goal - Building a better community.
                  </p>
                  <p>
                    Outside of programming, I love river trekking, biking in
                    summer and exploring wild hot spring in winter. Nature
                    always inspires me.
                  </p>
                </div>
              </div>
            </div>

            {/* <!------------------------------ Projects ------------------------------> */}

            <div className="card-container">
              <div className="p-2">
                <h4 className="lg:mb-4 mb-2 font-lg font-bold">
                  <span className="bg-gray-700 text-white pr-3">Projects</span>
                </h4>

                <div className="card-content gap-0.5 grid lg:grid-cols-2 grid-cols-1 tracking-wider">
                  <div className="rounded card-grid-item lg:p-3 p-1">
                    <h5 className="mb-1 font-bold">FoF</h5>
                    <span>A brand new dating app.</span>
                    <div className="tag-showcase">
                      <span className="tag expo">Expo</span>
                      <span className="tag react-native">React Native</span>
                      <span className="tag zustand">Zustand</span>
                      <span className="tag react-query">React Query</span>
                      <span className="tag jest">Jest</span>
                    </div>
                  </div>
                  <a
                    href="https://420.yenting.me/"
                    target="_blank"
                    className="hover:shadow-lg transition-all"
                  >
                    <div className="rounded card-grid-item lg:p-3 p-1">
                      <h5 className="mb-1 font-bold">420</h5>
                      <span>
                        A gallery for me to play with design skills and
                        libraries. Mainly built with THREE.JS and p5.
                      </span>
                      <div className="tag-showcase">
                        <span className="tag nextjs">NextJS</span>
                        <span className="tag chakra-ui">Chakra UI</span>
                        <span className="tag threejs">THREE</span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/YenTingWu/procrastination"
                    target="_blank"
                    className="transition-all hover:shadow-lg"
                  >
                    <div className="rounded card-grid-item lg:p-3 p-1">
                      <h5 className="mb-1 font-bold">
                        Procrastination
                        <span className="ml-3 font-medium text-gray-400">
                          archive
                        </span>
                      </h5>
                      <span>
                        A productivity app to help me understand how FE, BE and
                        DevOps work together.
                      </span>
                      <div className="tag-showcase">
                        <span className="tag nextjs">NextJS</span>
                        <span className="tag chakra-ui">Chakra UI</span>
                        <span className="tag zustand">Zustand</span>
                        <span className="tag react-query">React Query</span>
                        <span className="tag node">Node</span>
                        <span className="tag docker">Docker</span>
                        <span className="tag jest">Jest</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-------------------------- Work Experience --------------------------> */}
            <div className="experience-wrap flex lg:flex-col">
              <div className="card-container">
                <div className="p-2">
                  <h4 className="lg:mb-4 mb-2 font-lg font-bold">
                    <span className="bg-gray-700 text-white pr-3">
                      Work Experience
                    </span>
                  </h4>
                  <div className="card-content tracking-wider lg:leading-6 leading-2">
                    <div className="experience-card">
                      <h5>
                        <a target="_blank" href="https://www.weserve.tw/">
                          <span className="font-bold text-lg underline underline-offset-4 transition-all cursor-pointer hover:text-blue-600">
                            StarkTech
                          </span>
                        </a>
                        <span className="ml-3 font-medium text-base text-gray-500">
                          UI Engineer
                        </span>
                      </h5>
                      <span className="block mt-1 font-medium text-sm text-gray-500">
                        Aug 2020 - Jan 2021
                      </span>
                      <span className="block mt-3 mb-1">
                        Designed and developed a food delivery platform with
                        Expo and GatsbyJS
                      </span>
                      <ul className="list-disc list-inside pl-3">
                        <li>
                          Developed a web-based client-side food order system
                          with GatsbyJS
                        </li>
                        <li>
                          Developed mobile-based apps with Expo and React Native
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!---------------------- Open Source Experience ----------------------> */}

              <div className="card-container">
                <div className="p-2">
                  <h4 className="lg:mb-4 mb-2 font-lg font-bold">
                    <span className="bg-gray-700 text-white pr-3">
                      Open Source Experience
                    </span>
                  </h4>
                  <div className="card-content tracking-wider lg:leading-6 leading-2">
                    <div className="experience-card">
                      <h5>
                        <a target="_blank" href="https://chakra-ui.com/">
                          <span className="font-bold text-lg underline underline-offset-4 transition-all cursor-pointer hover:text-blue-600">
                            Chakra UI
                          </span>
                        </a>
                        <span className="ml-3 font-medium text-base text-gray-500">
                          Collaborator
                        </span>
                      </h5>
                      <span className="block mt-1 font-medium text-sm text-gray-500">
                        Sep 2021 - Present
                      </span>

                      <span className="block mt-3 mb-1">
                        In Docs & DevRel team
                      </span>
                      <ul className="list-disc list-outside pl-6">
                        <li>
                          Developed the site's with new features and maintain
                          the performance
                          <ul className="list-circle list-outside pl-6">
                            <li>
                              Recent PR -
                              <a
                                className="transition-all cursor-pointer hover:text-blue-600 underline"
                                target="_blank"
                                href="https://github.com/chakra-ui/chakra-ui-docs/pull/62"
                              >
                                Create Showcase Page
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>Improve docs to make use cases more clearly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-------------------------------- Stacks --------------------------------> */}

            <div className="card-container">
              <div className="p-2">
                <h4 className="lg:mb-4 mb-2 font-lg font-bold">
                  <span className="bg-gray-700 text-white pr-3">Stacks</span>
                </h4>
                <div className="card-content tracking-wider lg:leading-6 leading-2">
                  <div className="grid grid-cols-6 lg:max-w-full max-w-sm gap-x-5 gap-y-2">
                    <span className="font-bold lg:col-span-1 col-span-2 text-right">
                      Front End
                    </span>
                    <span className="lg:col-span-5 col-span-4">
                      React, Svelte
                    </span>
                    <span className="font-bold lg:col-span-1 col-span-2 text-right">
                      Back End
                    </span>
                    <span className="lg:col-span-5 col-span-4">
                      Node, Gin, PostgresQL, Serverless, Docker
                    </span>
                    <span className="font-bold lg:col-span-1 col-span-2 text-right">
                      Mobile
                    </span>
                    <span className="lg:col-span-5 col-span-4">
                      Expo, React Native
                    </span>
                    <span className="font-bold lg:col-span-1 col-span-2 text-right">
                      DevOps
                    </span>
                    <span className="lg:col-span-5 col-span-4">
                      Firebase, Droplets, Heroku
                    </span>
                    <span className="font-bold lg:col-span-1 col-span-2 text-right">
                      Language
                    </span>
                    <span className="lg:col-span-5 col-span-4">
                      Typescript, Javascript, Go
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-------------------------------- Education --------------------------------> */}

            <div className="card-container">
              <div className="p-2">
                <h4 className="lg:mb-4 mb-2 font-lg font-bold">
                  <span className="bg-gray-700 text-white pr-3">Education</span>
                </h4>
                <div className="card-content tracking-wider lg:leading-6 leading-2">
                  <div className="experience-card">
                    <h5>
                      <span className="font-bold text-lg">
                        Soochow University{" "}
                      </span>
                      <span className="lg:ml-3 lg:inline block font-medium text-sm text-gray-500">
                        Business Administration (B.A.)
                      </span>
                    </h5>
                    <span className="block mt-1 font-medium text-sm text-gray-500">
                      Sep 2015 - Jun 2019
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!--
    FOOTER
  --> */}

      <footer className="w-full mt-10 flex justify-center font-PT">
        <span className="mx-auto px-5 py-5 border-t-2 border-zinc-300">
          <a className="hover:underline" href="resume.pdf">
            PDF Version
          </a>
        </span>
      </footer>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resume | YTW</title>;
