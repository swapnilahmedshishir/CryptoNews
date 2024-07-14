import React from "react";
import EmailNewsletter from "./EmailNewsletter";

const Newsletter = () => {
  return (
    <>
      <div className="border-t md:border-t-0 xl:border-t">
        <div className="gap-4 p-10">
          <div className="flex flex-col justify-start items-start self-stretch gap-2">
            <div className="flex justify-start items-center self-stretch relative gap-1">
              <p className="flex-grow text-xs uppercase text-[#5637CD]">
                <a href="/newsletter">Newsletter</a>
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch relative gap-2.5">
              <p className="flex-grow text-[22px] text-left">
                <a href="/newsletter/daily">Tojo News Daily</a>
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch relative gap-2.5">
              <p className="flex-grow text-sm text-light-gray cursor-default"></p>
            </div>
          </div>
          {/* email input Field */}
          <EmailNewsletter />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
