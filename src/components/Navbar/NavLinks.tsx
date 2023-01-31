import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { NavLinkList } from "../../consts/NavLinkList";
import { CustomNavLink } from "./CustomNavLink";

interface Props {
  className: string;
}

export const NavLinks: FC<Props> = ({ className }) => {
  const downloadResume = () =>
    fetch(
      "https://drive.google.com/uc?export=download&id=1c_zCwR1GyWx8QLQUrK_vZhb7TBZj5CbQ"
    );

  return (
    <nav className={className}>
      <>
        {NavLinkList.map(({ navLinkId, scrollToId, icon }) => (
          <CustomNavLink
            key={navLinkId}
            navLinkId={navLinkId}
            scrollToId={scrollToId}
            icon={icon}
          />
        ))}
        {/* resume */}
        <div
          className="flex flex-nowrap rounded-full m-3 w-full cursor-pointer transition-colors delay-300 duration-100 ease-out h-10 items-center "
          onClick={downloadResume}
        >
          <div className="text-sky-400 flex flex-nowrap w-full rounded-full py-1 px-3 items-center hover:bg-sky-400/20">
            <CloudArrowDownIcon className="w-6 h-6 my-auto flex-shrink-0 text-inherit" />
            <a
              href="https://drive.google.com/uc?export=download&id=1c_zCwR1GyWx8QLQUrK_vZhb7TBZj5CbQ"
              target="_blank"
              className="ml-3 text-base text-inherit font-light tracking-wide  leading-[32px] hover:leading-[32px] w-full h-full"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </>
    </nav>
  );
};
