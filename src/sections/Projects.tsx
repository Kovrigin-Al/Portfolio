import { FC } from "react";
import ProjectContainer from "../components/ProjectModal/ProjectContainer";
import SectionContainer from "../components/SectionContainer";
import { NavLinkId, SectionName } from "../consts/NavLinkList";
import { useNav } from "../hooks/useNav";

export interface IProject {
  title: string;
  type: string;
  description: string;
  liveLink: string;
  gitLink: string;
  shortLink: string;
  frontend: string[];
  backend?: string[];
  features: string[];
  previews: string[];
}

const projects: Record<string, IProject> = {
  store: {
    title: "Online store",
    type: "Full Stack Application",
    description:
      "This is a simple full stack e-commerce app with authentification and authorization, file uploading, pagination and responsive design",
    liveLink: "https://azazone-client.onrender.com/",
    gitLink: "https://github.com/Kovrigin-Al/Azazon",
    shortLink: "azazone.com",
    frontend: ["React", "MobX", "Tailwind"],
    backend: ["NodeJS", "Express", "Postgres", "Sequelize"],
    features: [
      "Client-side part is created with React and styled with Tailwind",
      "Mobx is used as state manager",
      "There are restricted routes for adimin use only",
      "Admin can manage content of the website: create item cards with description and pictures",
      "Paginatiion is implemented for goods representation",
      "Interect with PostresSQL via Sequelize ARM",
      "DB schema is provided",
      "Routes are covered with tests (jest and supertest)",
      "Server can upload files",
      "Authentification with jwt token that is confirn and refreshed on every page reload",
    ],
    previews: [
      "azazone/mainPage.png",
      "azazone/loginPage.png",
      "azazone/adminPage.png",
      "azazone/itemPage.png",
    ],
  },
  portfolio: {
    title: "Portfolio website",
    type: "Full Stack Application",
    description:
      "Here you can find a link to github and description of the portfolio website you are currently browsing",
    liveLink: "",
    gitLink: "https://github.com/Kovrigin-Al/Portfolio",
    shortLink: "hire.me",
    frontend: ["React", "TypeScript", "Tailwind"],
    features: [
      "Anchor menu with tracking of viewed section",
      "Responsive design",
      "Resisable iframe container showing project previews",
    ],
    previews: ["portfolio/mainPage.png"],
  },
};

const Projects: FC = () => {
  const contactRef = useNav(NavLinkId.projects);
  const id = SectionName.projects;

  return (
    <SectionContainer reference={contactRef} id={id} title="Projects">
      <ProjectContainer project={projects.store} />
      <ProjectContainer project={projects.portfolio} />
    </SectionContainer>
  );
};

export default Projects;
