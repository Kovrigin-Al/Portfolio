import React, { FC } from "react";

interface Props {
  className: string;
}

const MdnIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width="14"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path d="m21.538 1.1-6.745 21.8h-2.77L18.77 1.1ZM24 1.1v21.8h-2.462V1.1Zm-12 0v21.8H9.538V1.1Zm-2.462 0L2.77 22.9H0L6.746 1.1Z" />
    </svg>
  );
};

export default MdnIcon;
