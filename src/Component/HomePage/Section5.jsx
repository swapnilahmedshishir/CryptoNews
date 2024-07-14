import React from "react";
import ProdCastCard from "../ProdCast/ProdCastCard";

const Section5 = () => {
  return (
    <section>
      <div className="md:mt-0 md:flex md:justify-between md:items-center w-full px-10 py-5 border-b border-t">
        <div className="flex justify-start items-center gap-3">
          <div className="relative">
            <h2 className="text-base uppercase text-dark font-semibold">
              <a href="/podcasts">podcasts</a>
            </h2>
          </div>
          <div className="hidden md:flex justify-start items-start text-center md:text-left relative gap-2.5">
            <p className="text-light-gray">
              Your favorite crypto and macro podcasts in one place.
            </p>
          </div>
        </div>
        <div>
          <a
            className="text-sm text-center md:text-left uppercase text-[#5637CD]"
            href="/podcasts"
          >
            <span className="flex align-middle">
              explore the network
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 mt-1.5"
                preserveAspectRatio="none"
              >
                <path
                  d="M6.005 1.5H0V2.5H6.005V4L8 2L6.005 0V1.5Z"
                  fill="#5637CD"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="relative w-full md:h-[445pt]">
        <div className="gap-10 p-10 touch-scroll md:absolute md:left-0 md:right-0 flex flex-col md:flex-row overflow-x-auto px-8 w-full">
          {/* prodcast start */}
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <ProdCastCard />
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <ProdCastCard />
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <ProdCastCard />
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <ProdCastCard />
          </div>
          <div className="shrink-0 grow-0 flex-none border min-w-[100px] md:w-72">
            <ProdCastCard />
          </div>
          {/* prodcast End  */}
        </div>
      </div>
    </section>
  );
};

export default Section5;
