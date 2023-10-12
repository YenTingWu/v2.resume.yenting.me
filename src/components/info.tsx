import * as React from "react";
import SmartPhoneIcon from "../../assets/smartphone.svg";
import MailIcon from "../../assets/mail.svg";
import GithubIcon from "../../assets/github.svg";
import GlobeIcon from "../../assets/globe.svg";
import data from "../data.json";

export const Info = () => {
  const { info } = data;

  const list = [
    {
      icon: <MailIcon className="w-[12px] h-[12px] inline mr-2" />,
      title: info.email,
      link: `mailto:${info.email}`,
    },
    {
      icon: <SmartPhoneIcon className="w-[12px] h-[12px] inline mr-2" />,
      title: info.phone,
      link: undefined,
    },
    {
      icon: <GithubIcon className="w-[12px] h-[12px] inline mr-2" />,
      title: info.github,
      link: info.github,
    },
    {
      icon: <GlobeIcon className="w-[12px] h-[12px] inline mr-2" />,
      title: info.blog,
      link: info.blog,
    },
  ];

  return (
    <section id="info">
      <div className="pl-2 lg:pl-0 lg:p-2 lg:block flex">
        <div>
          <h3 className="antialiased text-2xl font-medium">{info.name}</h3>
          <p className="mt-1 lg:mb-2 mb-1 text-gray-400 text-sm">
            Software Engineer
          </p>
        </div>
        <div className="lg:mt-2  lg:ml-0 ml-5 [&>*]:leading-4">
          {list.map(({ link, title, icon }) => (
            <a className="block" target="_blank" href={link}>
              {icon}
              <p className="inline text-xs">{title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
