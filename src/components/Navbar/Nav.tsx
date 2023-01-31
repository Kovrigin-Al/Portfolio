import { FC, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLinks } from "./NavLinks";

export const Nav: FC = () => {
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Popover>
      {({ open }) => (
        <>
          <div className="fixed z-10 md:w-48 w-screen h-16 md:h-screen bg-[#0B1120] flex md:flex-col  items-center md:items-center justify-start py-6">
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center ml-2 rounded-md bg-inherit p-2 text-slate-500 hover:bg-slate-900 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </Popover.Button>
            </div>
            <div
              onClick={handleNavClick}
              className="flex justify-center flex-wrap w-full md:w-48 cursor-pointer"
            >
              <span className="text-slate-100 pr-5 md:px-3 text-center text-2xl">
                Aleksei Kovrigin
              </span>
              <div className="hidden md:block bg-sky-700 py-[0.5px] my-5 w-full mx-3 "></div>
            </div>
            <NavLinks className="hidden md:flex md:flex-wrap w-48" />
          </div>

          {/* mobile popover */}
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className=" w-48 h-screen mt-16 pr-6 fixed z-20 inset-y-0 left-0 overflow-y-auto flex flex-col overflow-hidden bg-[#0B1120] shadow-xl">
              <NavLinks className="flex-row " />
            </Popover.Panel>
          </Transition>
          
        </>
      )}
    </Popover>
  );
};
