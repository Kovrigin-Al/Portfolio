import React, { FC } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SectionName } from "../consts/NavLinkList";

type Props = {
  id?: SectionName;
  reference?: React.MutableRefObject<HTMLElement | null>;
};

const Intro: FC<Props> = ({ id, reference }) => {
  const [text, helper] = useTypewriter({
    words: [" Engineer", " Frontend Developer"],
  });
  const { isDone } = helper;

  return (
    <section
      ref={reference}
      id={id}
      className="bg-[url('../assets/img/photo.jpeg')] flex-1 h-screen w-full bg-cover bg-top bg-no-repeat"
    >
      <div className=" h-full w-full bg-black bg-opacity-20 z-10">
        <header className="prose h-full w-full p-10">
          <h1 className=" text-white ">Hello!</h1>
          <h1 className=" text-white">
            I'm
            {text}
            {!isDone && <Cursor />}
          </h1>
          <h2 className="mt-5 text-white ">
            based in Tbilisi, Georgia
          </h2>
        </header>
      </div>
    </section>
  );
};

export default Intro;
