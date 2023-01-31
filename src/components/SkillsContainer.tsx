import React, { FC } from "react";

interface IImages {
  link: string;
  alt: string;
}

interface Props {
  images: IImages[];
  title: string;
}

const SkillsContainer: FC<Props> = ({ images, title }) => {
  return (
    <div className="mt-5 sm:mt-10 min-h-[100px] lg:mx-[10%] px-5 sm:px-2 py-5 justify-around flex flex-wrap bg-slate-800 sm:rounded-xl border-y-2 sm:border border-slate-500/30">
      <div className="w-full border-b-2 border-slate-500/30 m-4 tracking-wide sm:text-2xl text-xl text-pink-500 font-semibold capitalize">
        {title}
      </div>
      {images.map((i) => (
        <div key={i.alt} className=" flex-col justify-between sm:m-3 m-2 ">
          <img
            src={i.link}
            alt={i.alt}
            className='w-20  mx-auto'
            />
          <div className="text-center mt-1 sm:text-base text-sm text-white">{i.alt}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillsContainer;
