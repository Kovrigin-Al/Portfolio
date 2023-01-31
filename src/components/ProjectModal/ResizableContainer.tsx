import React, { FC, useEffect } from "react";
import makeResizableDiv from "../../helper/makeResizable";

type Props = {
  children: React.ReactNode;
};

const ResizableContainer: FC<Props> = ({ children }) => {
  useEffect(() => {
    makeResizableDiv("resizableDiv", "resizer");
  }, []);

  return (
    <div className=" w-auto max-w-full min-w-[500px] resizableDiv flex justify-end items-center">
      {children}
      <div className="resizer ml-1 px-2  hover:cursor-ew-resize">
        <div className="w-1.5 h-8 bg-sky-500/90 rounded-full"></div>
      </div>
    </div>
  );
};

export default ResizableContainer;
