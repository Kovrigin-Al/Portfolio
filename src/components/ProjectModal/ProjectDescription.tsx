import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import GithubIcon from "../../assets/icons/GithubIcon";
import { IProject } from "../../sections/Projects";

type Props = {
    project: IProject
};

const ProjectDescription: FC<Props> = ({project}) => {
  return (
    <>
      {" "}
      <div className="flex mt-5 pr-5 justify-end absolute w-full">
        <a
          href={project.gitLink}
          className="text-pink-500 hover:text-pink-400 inline-block px-2"
        >
          <GithubIcon />
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            className="text-pink-500 hover:text-pink-400 inline-block px-2"
          >
            <ArrowTopRightOnSquareIcon className="w-8 h-8" />
          </a>
        )}
      </div>
      <div className="pl-5 sm:-mt-5 prose prose-invert prose-sm sm:prose-base prose-headings:mt-1 w-full flex flex-wrap justify-start items-start ">
        <div className="sm:w-1/2 w-full text-2xl px-2">
          <h4>Frontend</h4>
          <ul className="text-base">
            {project.frontend.map((i, index) => (
              <li key={index + "front"}>{i}</li>
            ))}
          </ul>
        </div>
        {project.backend && (
          <div className="sm:w-1/2 w-full text-2xl px-2 ">
            <h4>Backend</h4>
            <ul className="text-base">
              {project.backend.map((i, index) => (
                <li key={index + "back"}>{i}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="w-full px-2 ">
          <h2>Features</h2>
          <ul>
            {project.features.map((i, index) => (
              <li key={index + "f"}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-sky-700 py-[2px] mx-5 "></div>
    </>
  );
};

export default ProjectDescription;
