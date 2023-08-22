import * as React from "react";

export const Projects = () => {
  return (
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
                A gallery for me to play with design skills and libraries.
                Mainly built with THREE.JS and p5.
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
                <span className="ml-3 font-medium text-gray-400">archive</span>
              </h5>
              <span>
                A productivity app to help me understand how FE, BE and DevOps
                work together.
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
  );
};
