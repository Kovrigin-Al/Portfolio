import React, { FC } from "react";
import SectionContainer from "../components/SectionContainer";
import SkillsContainer from "../components/SkillsContainer";
import { NavLinkId, SectionName } from "../consts/NavLinkList";
import { useNav } from "../hooks/useNav";

const images = {
  frontend: [
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS3",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "REACT",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      alt: "Redux",
    },
    {
      link: "https://mobx.js.org/assets/mobx.png",
      alt: "MobX",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      alt: "Tailwind",
    },
  ],
  backend: [
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
    },
    {
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "NodeJS",
  },
    {
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "Express",
  },
    {
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    alt: "PostgreSQL",
  },
    {
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
    alt: "Sequelize",
  },
],
other: [
  {
  link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg",
  alt: "Git",
  },
  {
  link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  alt: "PhotoShop",
  },
  {
  link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  alt: "npm",
  },

]
};



const Skills: FC = () => {
  const skillsRef = useNav(NavLinkId.skills);
  const id = SectionName.skills;
  return (
    <SectionContainer reference={skillsRef} id={id} title="Skills">
      <SkillsContainer title="Front-End" images={images.frontend}/>
      <SkillsContainer title="Back-End" images={images.backend}/>
      <SkillsContainer title="Other" images={images.other}/>
    </SectionContainer>
  );
};

export default Skills;
