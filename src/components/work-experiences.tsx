import * as React from "react";

export const WorkExperiences = () => {
  return (
    <div className="card-container">
      <div className="p-2">
        <h4 className="lg:mb-4 mb-2 font-lg font-bold">
          <span className="bg-gray-700 text-white pr-3">Work Experience</span>
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
              Designed and developed a food delivery platform with Expo and
              GatsbyJS
            </span>
            <ul className="list-disc list-inside pl-3">
              <li>
                Developed a web-based client-side food order system with
                GatsbyJS
              </li>
              <li>Developed mobile-based apps with Expo and React Native</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
