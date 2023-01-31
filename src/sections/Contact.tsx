import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import GithubIcon from "../assets/icons/GithubIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";
import TelegramIcon from "../assets/icons/TelegramIcon";
import WhatsappIcon from "../assets/icons/WhatsappIcon";
import SectionContainer from "../components/SectionContainer";
import { NavLinkId, SectionName } from "../consts/NavLinkList";
import { useNav } from "../hooks/useNav";

const contacts = [
  {
    icon: <GithubIcon className="w-8 h-8" />,
    link: "https://github.com/Kovrigin-Al",
    name: "github.com/Kovrigin-Al",
  },
  {
    icon: <EnvelopeIcon className="w-8 h-8" />,
    link: "mailto:kovrigin-alexy@yandex.ru",
    name: "kovrigin-alexy@yandex.ru",
  },
  {
    icon: <LinkedinIcon />,
    link: "https://linkedin.com/in/aleksei-kovrigin",
    name: "linkedin.com/in/aleksei-kovrigin",
  },
  {
    icon: <TelegramIcon />,
    link: "https://t.me/alkovrigin",
    name: "@alkovrigin",
  },
  {
    icon: <WhatsappIcon />,
    link: "https://wa.me/79645599654",
    name: "Chat on WhatsApp",
  },
];

const Contact: FC = () => {
  const contactRef = useNav(NavLinkId.contact);
  const id = SectionName.contact;

  return (
    <SectionContainer reference={contactRef} id={id} title="Contact">
      <div className="grid grid-cols-1 auto-rows-auto gap-2 p-3 mt-5 text-white">
        {contacts.map((i) => (
          <div key={i.name} className="grid grid-cols-12 gap-6">
            <div className="p-2 col-start-1 col-end-3 flex justify-end items-center font-semibold w-full text-white">
              {i.icon}
            </div>
            <div className="col-start-3 col-end-12 flex">
              <a
                href={i.link}
                target="_blank"
                rel="noreferrer"
                className=" text-sky-500 inline-block my-auto justify-end w-auto h-auto hover:text-sky-400 highlight-white/20"
              >
                {i.name}
              </a>
            </div>
          </div>
        ))}
        <div className="p-2 col-start-1 col-end-1">
          <a
            href="https://drive.google.com/uc?export=download&id=1c_zCwR1GyWx8QLQUrK_vZhb7TBZj5CbQ"
            target="_blank"
            rel="noreferrer"
            className="mt-10 mx-12 text-white font-semibold h-12 px-6 rounded-full flex items-center justify-center bg-pink-500 highlight-white/20 hover:bg-pink-400"
          >
            Download CV
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
