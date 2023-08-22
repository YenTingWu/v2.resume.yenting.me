import * as React from "react";

export const OpenSourceExperiences = () => {
  return (
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

            <span className="block mt-3 mb-1">In Docs & DevRel team</span>
            <ul className="list-disc list-outside pl-6">
              <li>
                Developed the site's with new features and maintain the
                performance
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
  );
};
