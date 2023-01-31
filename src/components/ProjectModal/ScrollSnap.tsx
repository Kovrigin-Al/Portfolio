import { FC } from "react";
import { IProject } from "../../sections/Projects";

type Props = {
  project: IProject;
};

const ScrollSnap: FC<Props> = ({ project }) => {
  return (
    <div className="flex snap-x h-auto snap-mandatory  w-full mx:auto overflow-x-scroll ">
      <div className="snap-center shrink-0 w-[12.5%]  snap-always"></div>
      {project.previews.map((i) => (
        <div className="snap-center shrink-0 w-3/4  snap-always" key={i}>
          <img
            src={require(`../../assets/img/${i}`)}
            alt="i"
            className="h-fit p-1 sm:p-7"
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollSnap;
