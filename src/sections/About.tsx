import React, { FC } from "react";
import SectionContainer from "../components/SectionContainer";
import { NavLinkId, SectionName } from "../consts/NavLinkList";
import { useNav } from "../hooks/useNav";

const About: FC = () => {
  const aboutRef = useNav(NavLinkId.about);
  const id = SectionName.about;
  return (
    <SectionContainer reference={aboutRef} id={id} title="About">
      <div className="grid grid-cols-12 auto-rows-auto gap-8 p-3 mt-5 text-white">
        {/* about */}
        <div className="col-start-2 col-end-12 lg:col-start-1 lg:col-end-8  justify-items-center lg:pr-8">
          <h3 className="text-justify  font-sans sm:text-2xl text-xl leading-7 font-bold mb-4">
            I'm <span className="text-sky-500 ">Aleksei Kovrigin,</span> a
            Junior Web Developer
          </h3>
          <p className="sm:text-lg text-md mb-4">
            My career path in web development area has been started in August
            2021. I believe that my engineering background has helped me gain
            solid knowledge in basic programming in a short time. However, I've
            already spent 600+ hour learning new things and completed more than
            80 practice tasks and educational projects.
          </p>
          <p className="sm:text-lg text-md mb-4">
            I'm keen on challenging tasks, looking for continues improvement and
            contribute in meaningful way to create things for people.
          </p>
        </div>
        {/* summary */}
        <div className="col-start-2 col-end-12 lg:col-start-8 lg:col-end-13 divide-y-2 sm:text-base text-sm">
          <div className="p-2">
            <span className="font-semibold lg:w-[100px] inline-block w-32">
              Name:
            </span>
            <div className="inline-block">Aleksei Kovrigin</div>
          </div>
          <div className="p-2">
            <span className="font-semibold lg:w-[100px] inline-block w-32">
              Email:
            </span>
            <div className="inline-block">
              <a
                href="mailto:kovrigin-alexy@yandex.ru"
                className="text-sky-500 hover:text-sky-400 highlight-white/20"
              >
                kovrigin-alexy@yandex.ru
              </a>
            </div>
          </div>
          <div className="p-2">
            <span className="font-semibold lg:w-[100px] inline-block w-32">
              Age:
            </span>
            <div className="inline-block">28</div>
          </div>
          <div className="p-2">
            <span className="font-semibold lg:w-[100px] inline-block w-32">
              Relocation:
            </span>
            <div className="inline-block">possible</div>
          </div>
          <div className="p-2 ">
            <a
              href="#"
              className="mt-10 mx-12 text-white font-semibold h-12 px-6 rounded-full flex items-center justify-center bg-pink-500 highlight-white/20 hover:bg-pink-400"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
