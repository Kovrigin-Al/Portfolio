import React, { FC, useEffect, useState } from "react";
import { combineClasses } from "../../helper/combineClasses";
import makeResizableDiv from "../../helper/makeResizable";

type Props = {
  children: React.ReactNode;
};

const ResizableContainer: FC<Props> = ({ children }) => {
  const [animate, setAnimate] = useState(false);
  console.log('render')

  useEffect(() => {
    makeResizableDiv("resizableDiv", "resizer");
  }, []);

  const stopAnimation = () => {
    setAnimate(false);
    console.log('end')
  };

  const startAnimation = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false)
    }, 1000);
    console.log('start')
  };

  return (
    <div onClick={startAnimation} className=" w-auto max-w-full min-w-[500px] resizableDiv flex justify-end items-center">
      {children}
      <div className="resizer ml-1 px-2  hover:cursor-ew-resize relative">
        <div
          onAnimationEnd={stopAnimation}
          className={combineClasses(
            "absolute w-1.5 h-8 bg-sky-500/90 rounded-full",
            animate ? "animate-ping" : ""
          )}
        ></div>
        <div className="w-1.5 h-8 bg-sky-500/90 rounded-full"></div>
      </div>
    </div>
  );
};

export default ResizableContainer;
