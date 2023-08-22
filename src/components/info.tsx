import * as React from "react";
import GithubIcon from "../../assets/github.svg";
import TwitterIcon from "../../assets/twitter.svg";
import GlobeIcon from "../../assets/globe.svg";

export const Info = () => {
  return (
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
            <GithubIcon className="icons" />
          </a>
          <a
            className="icons-links"
            target="_blank"
            href="https://twitter.com/YenTing09677393"
          >
            <TwitterIcon class className="icons" />
          </a>
          <a className="icons-links" target="_blank" href="https://yenting.me">
            <GlobeIcon className="icons" />
          </a>
        </span>
      </div>
    </section>
  );
};
