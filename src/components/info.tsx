import * as React from "react";
import GithubIcon from "../../assets/github.svg";
import TwitterIcon from "../../assets/twitter.svg";
import GlobeIcon from "../../assets/globe.svg";
import data from "../data.json";

export const Info = () => {
  const { info } = data;

  return (
    <section id="info">
      <div className="pl-2 lg:pl-0 lg:p-2">
        <h3 className="antialiased text-2xl font-medium">{info.name}</h3>
        <p className="mt-1 lg:mb-2 mb-1 text-gray-400 text-sm">
          Software Engineer
        </p>
        <a className="text-xs" target="_blank" href={`mailto:${info.email}`}>
          {info.email}
        </a>
        <span className="flex lg:mt-2 mt-1 [&_a:not(:first-child)]:ml-[0.7rem]">
          <a target="_blank" href={info.github}>
            <GithubIcon className="w-[16px] h-[16px] " />
          </a>
          <a target="_blank" href={info.twitter}>
            <TwitterIcon className="w-[16px] h-[16px]" />
          </a>
          <a target="_blank" href={info.blog}>
            <GlobeIcon className="w-[16px] h-[16px] " />
          </a>
        </span>
      </div>
    </section>
  );
};
