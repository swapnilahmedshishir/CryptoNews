import React from "react";

export const ContactUs = () => {
  return (
    <>
      <div className="p-12 border-b">
        <nav aria-label="breadcrumb">
          <ol className="flex flex-row gap-2 text-[#5637cd] uppercase text-sm text-left">
            <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
              <a href="/">home</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="w-3 h-3 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                ></path>
              </svg>
            </li>
            <li className="flex flex-row flex-grow-0 flex-shrink-0 items-center">
              <a href="/contact-us">Contact Us</a>
            </li>
          </ol>
        </nav>
        <div className="">
          <h1 className="self-stretch w-full text-5xl font-semibold text-left text-[#110b29]">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="p-12">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-10">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3 p-10 border border-[#b4b4b4]/[0.35]">
            <h2 className="self-stretch flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#110b29]">
              News
            </h2>
            <p className="self-stretch flex-grow-0 flex-shrink-0 text-lg text-left text-[#110b29]">
              <p className="pb-4 self-stretch flex-grow-0 flex-shrink-0 text-lg text-left text-[#110b29]">
                Have a hot tip or news to share? Email us at{" "}
                <a
                  href="mailto:news@tojonews.co"
                  className="text-[#5637cd] hover:text-dark"
                >
                  news@tojonews.co
                </a>
                .
              </p>
              <p className="pb-4 self-stretch flex-grow-0 flex-shrink-0 text-lg text-left text-[#110b29]">
                Want to let the industry know about a new hire? Email us at{" "}
                <a
                  href="mailto:news@tojonews.co"
                  className="text-[#5637cd] hover:text-dark"
                >
                  news@tojonews.co
                </a>{" "}
                and put “HIRING UPDATE” in the subject line.
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-lg text-left text-[#110b29]">
                To share a press release with us, paste the release into the
                body of the email so we can read it quickly and easily. Please
                do not send attachments.
              </p>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-10">
            <div className="w-full flex flex-col justify-start items-start flex-grow relative gap-3 p-10 border border-[#b4b4b4]/[0.35]">
              <h3 className="self-stretch flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#110b29]">
                Sales &amp; Advertising
              </h3>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-lg text-left text-[#110b29]">
                For information on advertising with tojonews, contact us through
                our{" "}
                <a className="text-[#5637cd] hover:text-dark" href="/advertise">
                  advertising page
                </a>
                .
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start flex-grow relative gap-3 p-10 border border-[#b4b4b4]/[0.35]">
              <h3 className="self-stretch flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#110b29]">
                Events &amp; Roundtables
              </h3>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-lg text-left text-[#110b29]">
                Email our events and roundtables team at{" "}
                <a
                  href="mailto:events@tojonews.co"
                  className="text-[#5637cd] hover:text-dark"
                >
                  events@tojonews.co
                </a>{" "}
                or inquire about sponsorship opportunities here.{" "}
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start flex-grow relative gap-3 p-10 border border-[#b4b4b4]/[0.35]">
              <h3 className="self-stretch flex-grow-0 flex-shrink-0 text-[28px] text-left text-[#110b29]">
                Hiring &amp; Careers
              </h3>
              <p className="self-stretch flex-grow-0 flex-shrink-0 text-lg text-left text-[#110b29]">
                Check out the careers page to view our open positions or email
                us at{" "}
                <a
                  href="mailto:careers@tojonews.co"
                  className="text-[#5637cd] hover:text-dark"
                >
                  careers@tojonews.co
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
