import React, { FC } from "react";
import { SectionName } from "../consts/NavLinkList";

interface Props {
  children: React.ReactNode;
  title: string;
  reference: React.MutableRefObject<HTMLElement | null>;
  id: SectionName;
}

const SectionContainer: FC<Props> = ({ children, title, id, reference }) => {
  return (
    <section
      ref={reference}
      id={id}
      className="flex-1  min-h-[60vh] w-full bg-[#0B1120]"
    >
      <h2 className="text-3xl tracking-wide  md:text-4xl text-white pl-4 pb-3 pt-5 sm:py-6">
        {title}
      </h2>
      <div className="bg-sky-700 py-[2px] mx-5 "></div>
      <div className="sm:p-10 ">{children}</div>
    </section>
  );
};

export default SectionContainer;
