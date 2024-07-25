import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col">
      <section className="px-5 md:px-10 lg:px-20 xl:px-40 py-24 xl:py-[200px]">
        <div className="flex flex-col xl:flex-row justify-center items-center relative gap-10 mx-auto max-w-xl">
          <div className="flex flex-col relative gap-5 lg:justify-center xl:flex-grow-0 xl:flex-shrink-0 xl:w-full ">
            <picture>
              <img
                src="\Images\template-1599667_1280.png"
                className="w-full max-w-sm lg:max-w-full object-cover"
                alt="about"
              />
            </picture>
          </div>
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-full relative gap-5">
            <div className="text-center xl:text-left flex flex-col items-center lg:items-start gap-3">
              <p className="text-sm text-left uppercase text-[#5637cd]">
                about Tujo News
              </p>
              <p className="text-4xl xl:text-5xl font-semibold text-left text-[#110b29] text-center lg:text-left">
                We&#39;re building the backbone of crypto information.
              </p>
            </div>
            <div className="flex-grow-0 flex-shrink-0 text-lg xl:text-xl text-left text-[#110b29] text-center lg:text-left">
              Tujo News is a media and information platform that delivers news
              and insights about crypto to millions of investors. Our editorial
              site, newsletters, podcasts, conferences, research, and data
              provide investors with the critical analysis and information they
              need to make smarter decisions about digital assets.
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-10 border-t-0 border-r-0 border-b-0 border-l-4 border-event-accent border-black px-5 sm:px-12 md:px-24 xl:px-48 pb-24 xl:pb-[200px]">
        <div className="flex flex-col justify-start items-start w-full gap-2.5 pl-5 md:pl-10 lg:pl-14">
          <div className="flex flex-col justify-center items-center self-stretch">
            <div className="flex flex-col justify-start items-start self-stretch gap-3">
              <span className="text-sm text-left uppercase text-[#5637cd]">
                mission
              </span>
              <div className="mt-10 flex flex-col justify-center items-start self-stretch gap-5">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-left text-[#110b29]">
                  We're on a mission to onboard the next wave of crypto
                  investors.
                </h3>
              </div>
              <div className="flex flex-col gap-2 text-md lg:text-xl text-left text-[#110b29]">
                <p>
                  We're accelerating crypto's adoption by making its most
                  innovative areas accessible.
                </p>
                <p>
                  Our media platform increases transparency, engages
                  institutions and regulators, and provides a non-biased,
                  non-tribal view of crypto. Our research platform helps crypto
                  natives understand what’s coming next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-center items-center self-stretch gap-10 bg-[#f7f7f7] py-10 lg:py-20 xl:py-40 px-10 md:px-20 lg:px-20 xl:px-40">
        <div className="flex flex-col justify-between items-center relative">
          <div className="flex flex-col justify-start items-start gap-4 max-w-lg">
            <div className="flex flex-col justify-start items-start gap-3">
              <p className="text-sm text-left uppercase text-[#5637cd]">
                careers
              </p>
              <p className="text-[32px] text-left text-[#110b29]">
                Build with us.
              </p>
            </div>
            <div className="text-xl text-left text-[#110b29] flex flex-col gap-6">
              <p>
                We’re passionate about what we do, and are looking for creative,
                curious, hard-working individuals who want to make an impact.
              </p>
              <p>
                We value a flat organization, clear communication, and taking
                ownership over your goals.
              </p>
              <p>Come join our growing team!</p>
            </div>
            <p className="text-base text-left text-[#5637cd]">
              <Link className="hover:text-primary" to="/careers">
                View open positions
              </Link>
            </p>
          </div>
        </div>
        <picture className=" h-[405.59px] relative">
          <img
            src="\Images\istockphoto-1346125184-612x612.jpg"
            className="h-[405.59px] object-cover"
            alt="tojo news team image "
          />
        </picture>
      </section>
    </div>
  );
};

export default About;
