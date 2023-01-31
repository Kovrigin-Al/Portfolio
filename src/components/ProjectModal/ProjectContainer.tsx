import { FC, useState } from "react";
import { IProject } from "../../sections/Projects";
import { ProjectModal } from "./ProjectModal";
interface Props {
  project: IProject;
}

const ProjectContainer: FC<Props> = ({ project }) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="py-4">
      <div className="max-w-md mx-auto bg-slate-800 sm:rounded-xl border-y-2 sm:border border-slate-500/30 overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              onClick={openModal}
              className="h-48 w-full hover:cursor-pointer object-cover md:h-full md:w-48"
              src={require(`../../assets/img/${project.previews[0]}`)}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div
              onClick={openModal}
              className="uppercase tracking-wide sm:text-2xl text-xl text-pink-500 hover:underline underline-offset-4 hover:cursor-pointer font-semibold"
            >
              {project.title}
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium text-slate-500 ">
              {project.type}
            </div>
            <p className="mt-2 text-white">{project.description}</p>
          </div>
        </div>
      </div>

      <ProjectModal closeModal={closeModal} isOpen={isOpen} project={project} />
    </div>
  );
};

export default ProjectContainer;
