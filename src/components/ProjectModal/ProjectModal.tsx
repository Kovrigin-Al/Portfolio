import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, useRef } from "react";
import TransitionChildOpacity from "../../helper/TransitionChildOpacity";
import { IProject } from "../../sections/Projects";
import BrowserWindowContainer from "./BrowserWindowContainer";
import ProjectDescription from "./ProjectDescription";
import ResizableContainer from "./ResizableContainer";
import ScrollSnap from "./ScrollSnap";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  project: IProject;
}

export const ProjectModal: FC<Props> = ({ isOpen, closeModal, project }) => {
  const ref = useRef(null);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          initialFocus={ref}
          className="relative z-10"
          onClose={closeModal}
        >
          {/* background */}
          <TransitionChildOpacity>
            <div className="fixed inset-0 bg-gray-800 backdrop-blur-sm backdrop-filter  bg-opacity-80" />
          </TransitionChildOpacity>

          {/* modal */}
          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChildOpacity>
                <Dialog.Panel className="w-full transform h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 p-2 sm:p-6  md:mx-20 text-left align-middle transition-all">
                  <Dialog.Title
                    as="div"
                    ref={ref}
                    className="text-xl sm:text-2xl font-medium leading-6 text-sky-500/90 sm:mb-4 mb-2"
                  >
                    <section className="pl-5">{project.title}</section>
                    <div className="bg-sky-700 py-[2px] mt-2 mx-5 "></div>
                  </Dialog.Title>

                  {/* project preview */}
                  <div className="hidden lg:block">
                    {project.liveLink ? (
                      <ResizableContainer>
                        <BrowserWindowContainer project={project}>
                          <iframe
                            src={project.liveLink}
                            title={project.title}
                            className="w-full h-[150vh] pointer-events-none "
                          ></iframe>
                        </BrowserWindowContainer>
                      </ResizableContainer>
                    ) : (
                      <ScrollSnap project={project} />
                    )}
                  </div>
                  <div className="lg:hidden">
                    <ScrollSnap project={project} />
                  </div>

                  {/* description block */}
                  <div className="relative">
                    <ProjectDescription project={project}/>

                    <div className="mt-5 ml-5 flex items-start justify-between">
                      <button
                        type="button"
                        className=" mx-4 text-white font-semibold h-12 px-6 rounded-xl flex items-center justify-center bg-sky-500/60 highlight-white/20 hover:bg-sky-400"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </TransitionChildOpacity>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
