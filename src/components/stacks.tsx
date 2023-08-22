import * as React from "react";

export const Stacks = () => {
  return (
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
            <span className="lg:col-span-5 col-span-4">React, Svelte</span>
            <span className="font-bold lg:col-span-1 col-span-2 text-right">
              Back End
            </span>
            <span className="lg:col-span-5 col-span-4">
              Node, Gin, PostgresQL, Serverless, Docker
            </span>
            <span className="font-bold lg:col-span-1 col-span-2 text-right">
              Mobile
            </span>
            <span className="lg:col-span-5 col-span-4">Expo, React Native</span>
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
  );
};
