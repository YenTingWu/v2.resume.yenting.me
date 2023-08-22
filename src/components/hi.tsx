import * as React from "react";

export const Hi = () => {
  return (
    <div className="card-container mt-2 lg:mt-0">
      <div className="p-2">
        <h4 className="lg:mb-4 mb-2 font-lg font-bold">
          <span className="bg-gray-700 text-white pr-3">HI</span>
        </h4>
        <div className="card-content">
          <p>
            My name is YenTing Wu, a self-motivated software engineer and a
            creator. My passion for being a software engineer lies in coming up
            with brilliant ideas with my colleges and enabling them. I take good
            care about experience, design and communication.
          </p>
          <p>
            I am also an open-source collaborator, mainly contribute to React
            community. I currently work with Chakra UI team to build the doc
            site and maintain DevRel. I love to collaborate with people coming
            from different backgrounds but having the same goal - Building a
            better community.
          </p>
          <p>
            Outside of programming, I love river trekking, biking in summer and
            exploring wild hot spring in winter. Nature always inspires me.
          </p>
        </div>
      </div>
    </div>
  );
};
