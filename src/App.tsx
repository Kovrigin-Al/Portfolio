import { FC } from "react";
import About from "./sections/About";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const App: FC = () => {
  return (
    <div className="flex-row md:flex-row overflow-y-scroll">
      <div className="md:pl-48 mt-16 md:mt-0 ">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
