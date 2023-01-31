import React, { FC, useContext } from "react";
import { INavLink } from "../../consts/NavLinkList";
import { NavContext } from "../../context/NavContext";
import { combineClasses } from "../../helper/combineClasses";

export const CustomNavLink: FC<INavLink> = ({
  navLinkId,
  scrollToId,
  icon,
}) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId)?.scrollIntoView({
      behavior: "smooth", 
    });
  };

  return (
    <div
      className={combineClasses(
        "flex flex-nowrap rounded-full m-3 w-full cursor-pointer transition-colors delay-300 duration-100 ease-out h-10 items-center ",
        activeNavLinkId === navLinkId ? " bg-sky-400/10 " : ""
      )}
      onClick={handleClick}
    >
      <div
        className={combineClasses(
          activeNavLinkId === navLinkId ? "hover:text-sky-600 " : "",
          "text-sky-400 flex flex-nowrap  w-full   rounded-full py-1 px-3 items-center hover:bg-sky-400/20"
        )}
      >
        <div className="h-6 w-6 my-auto flex-shrink-0 text-inherit">
          {icon && React.createElement(icon)}
        </div>
        <span
          id={navLinkId}
          className="ml-3 text-base text-inherit font-light tracking-wide  leading-[32px] hover:leading-[32px] w-full h-full"
        >
          {navLinkId}
        </span>
      </div>
    </div>
  );
};
