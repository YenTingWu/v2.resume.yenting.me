import * as React from "react";
import GithubIcon from "../../assets/github.svg";
import TwitterIcon from "../../assets/twitter.svg";
import GlobeIcon from "../../assets/globe.svg";
import data from "../data.json";

export const Info = () => {
  const { info } = data;

  return (
    <section id="info">
      <div className="pl-2 lg:pl-0">
        <h3 className="antialiased text-2xl font-medium">{info.name}</h3>
        <p className="mt-2 lg:mb-4 mb-1 text-gray-400 text-sm">
          Software Engineer
        </p>
        <a className="text-xs" target="_blank" href={`mailto:${info.email}`}>
          {info.email}
        </a>
        <span className="flex lg:mt-2 mt-1">
          <a className="icons-links" target="_blank" href={info.github}>
            <GithubIcon className="icons" />
          </a>
          <a className="icons-links" target="_blank" href={info.twitter}>
            <TwitterIcon className="icons" />
          </a>
          <a className="icons-links" target="_blank" href={info.blog}>
            <GlobeIcon className="icons" />
          </a>
        </span>
      </div>
    </section>
  );
};
