import { FC, ReactElement, ReactNode } from "react";
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
  features: ReactNode[][];
  previews: string[];
  about?: ReactNode[][];
  conclusion?: ReactNode[][];
}

const projects: Record<string, IProject> = {
  redditMini: {
    title: "Reddit Mini",
    type: "Single Page Application",
    description:
      "This social media app is a clone of Reddit with limited functionality, i.e. designed for content consumption (90% of users consume content and do not create).",
    liveLink: "https://reddit-mini.vercel.app",
    gitLink: "https://github.com/Kovrigin-Al/RedditMini_refactored",
    shortLink: "RedditMini.com",
    frontend: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind"],
    features: [
      [
        `Read posts and watch videos in the feed with `,
        <b>infinite scrolling</b>,
        ";",
      ],
      [
        "Search for subreddits and content via ",
        <b>debounced search</b>,
        " bar;",
      ],
      [
        "Read comments on each post using the ",
        <b>nested comment system</b>,
        ";",
      ],
      ["Be notified by ", <b>custom toasts</b>, " about some events;"],
      [
        "Seamlessly navigate through content on any device thanks to ",
        <b>data caching</b>,
        " and ",
        <b>responsive design</b>,
        ".",
      ],
    ],
    previews: ["redditMini/mainPage.png", "redditMini/nestedComments.png"],
    about: [
      [
        "This is a single page application inspired by ",
        <a href="https://reddit.com" target={"_blank"} rel="noreferrer">
          Reddit
        </a>,
        ". The app has limited functionality, i.e. designed for content consumption (90% of users consume content and do not create). ",
      ],
      [
        "The app is based on the open Reddit API and does not require authentication.",
      ],
    ],
    conclusion: [
      [
        "The development of the project was an exiting opportunity for me to consolidate my knowledge of redux state management and the use of typescript, as well as become familiar with rtk query and data caching. I have also implemented best practices to avoid unnecessary components re-renders and improve user experience.",
      ],
      [
        "It is also interesting to note my growth as a developer by comparing this project and the ",
        <a href="https://reddit-mini.onrender.com" target={"_blank"} rel="noreferrer">
          one
        </a>,
        " I did as practice while taking the learning course on ",
        <a href="https://codecademy.com" target={"_blank"} rel="noreferrer">
        Codecademy
      </a>,
        ". ",
      ],
    ],
  },
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
      ["Client-side part is created with React and styled with Tailwind"],
      ["Mobx is used as state manager"],
      ["There are restricted routes for adimin use only"],
      [
        "Admin can manage content of the website: create item cards with description and pictures",
      ],
      ["Paginatiion is implemented for goods representation"],
      ["Interect with PostresSQL via Sequelize ARM"],
      ["DB schema is provided"],
      ["Routes are covered with tests (jest and supertest)"],
      ["Server can upload files"],
      [
        "Authentification with jwt token that is confirn and refreshed on every page reload",
      ],
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
    type: "Single Page Application",
    description:
      "Here you can find a link to github and description of the portfolio website you are currently browsing",
    liveLink: "",
    gitLink: "https://github.com/Kovrigin-Al/Portfolio",
    shortLink: "hire.me",
    frontend: ["React", "TypeScript", "Tailwind"],
    features: [
      ["Anchor menu with tracking of viewed section"],
      ["Responsive design"],
      ["Resisable iframe container showing project previews"],
    ],
    previews: ["portfolio/mainPage.png"],
  },
};

const Projects: FC = () => {
  const contactRef = useNav(NavLinkId.projects);
  const id = SectionName.projects;

  return (
    <SectionContainer reference={contactRef} id={id} title="Projects">
      <ProjectContainer project={projects.redditMini} />
      <ProjectContainer project={projects.store} />
      <ProjectContainer project={projects.portfolio} />
    </SectionContainer>
  );
};

export default Projects;
