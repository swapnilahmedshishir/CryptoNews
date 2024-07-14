import React from "react";
import ProdCastCard from "./ProdCastCard";

const ProdCast = () => {
  return (
    <div className="gap-6 xs:gap-8 lg:gap-10 p-6 xs:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-grow-0 flex-shrink-0 w-full">
      {/* this is map prodcast */}
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <ProdCastCard />
      </div>
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <ProdCastCard />
      </div>
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <ProdCastCard />
      </div>
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <ProdCastCard />
      </div>
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <ProdCastCard />
      </div>
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <ProdCastCard />
      </div>
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <ProdCastCard />
      </div>
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <ProdCastCard />
      </div>
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <ProdCastCard />
      </div>
      <div className="shrink-0 grow-0 flex-none border min-w-[100px]">
        <ProdCastCard />
      </div>
    </div>
  );
};

export default ProdCast;
