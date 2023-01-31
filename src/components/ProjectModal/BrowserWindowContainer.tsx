import { AcademicCapIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import React, { FC, useRef } from "react";
import MdnIcon from "../../assets/icons/MdnIcon";
import StackOverflowIcon from "../../assets/icons/StackOverflowIcon";
import { IProject } from "../../sections/Projects";

type Props = {
  children: React.ReactNode;
  project: IProject;
};

const BrowserWindowContainer: FC<Props> = ({ children, project }) => {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <section ref={ref} className="w-full pl-5 min-w-[400px] h-full">
      <div className="sm:rounded-xl ring-1 ring-slate-900/5">
        <div className="sm:rounded-t-xl bg-none bg-slate-700 highlight-white/10">
          {/* browser header */}
          <div
            className="py-2.5 grid items-center px-4 gap-8"
            style={{ gridTemplateColumns: "7.125rem 1fr 7.125rem" }}
          >
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]"></div>
              <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#F4BF50]"></div>
              <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#61C454]"></div>
            </div>
            {/* url input */}
            <div className="overflow-hidden rounded-md font-medium text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset ring-slate-900/5 mx-auto w-4/5 bg-slate-800 text-slate-500">
              <LockClosedIcon className=" w-3.5 h-3.5 mr-1.5 text-slate-500" />
              {project.shortLink}
            </div>
            <div className="flex justify-end"></div>
          </div>

          {/* browser tabs */}
          <div className="grid grid-cols-3 text-xs leading-5 overflow-hidden">
            <div className="pointer-events-none select-none rounded-tr border border-slate-900/5 px-4 py-1.5 -mb-px -ml-px flex items-center justify-center space-x-2 bg-slate-800 text-slate-500">
              <MdnIcon className="flex-none text-slate-400" />
              <div className="truncate">MDN Web Docs</div>
            </div>
            <div className="pointer-events-none select-none font-medium px-4 py-1.5 flex items-center justify-center space-x-2 text-slate-200">
              <AcademicCapIcon className="w-5 h-5 flex-none text-slate-400" />
              <div className="truncate">
                {project.title} - {project.type}
              </div>
            </div>
            <div className="pointer-events-none select-none rounded-tl border border-slate-900/5 pl-4 pr-8 py-1.5 -mb-px -mr-4 flex items-center justify-center space-x-2 bg-slate-800 text-slate-500">
              <StackOverflowIcon className="flex-none text-slate-400" />
              <div className="truncate">
                Stack Overflow - Where Developers Learn, Share, & Build Careers
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[65vh] overflow-y-auto border-t rounded-b-xl pb-8 mb-2 bg-slate-800 border-slate-900/50">
          {children}
        </div>
        
      </div>
    </section>
  );
};

export default BrowserWindowContainer;
