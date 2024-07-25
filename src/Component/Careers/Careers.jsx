import React from "react";

const Careers = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <section className="flex flex-col lg:flex-row justify-center items-center self-stretch gap-10 bg-[#f7f7f7]">
          <picture className="max-h-[450px] relative">
            <img
              src="/Images/istockphoto-1346125184-612x612.jpg"
              className="object-cover"
              alt="advertise-header-image"
              style={{ height: " 400px" }}
            />
          </picture>
          <div className="flex flex-col justify-between items-center relative text-center lg:text-left ">
            <div className="flex flex-col justify-start items-start gap-4 max-w-lg px-6 lg:py-24">
              <div className="flex flex-col justify-start items-start gap-3">
                <h1 className="text-2xl md:text-3xl lg:text-4xl max-w-4xl font-semibold text-[#110b29]">
                  Build with us.
                </h1>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-lg text-[#110b29]">
                <div>
                  We’re a fast-growing financial media brand that delivers news
                  and insights about bitcoin and crypto to millions of
                  investors. Our content, newsletters, podcasts and events
                  provide investors with the critical analysis and information
                  they need to make smarter decisions about digital assets.
                  <br /> <br />
                  We’re passionate about what we do, and are looking for
                  creative, curious, hard-working individuals who want to make
                  an impact.
                </div>
              </p>
              <div className="flex flex-row gap-4 mb-12 mx-auto lg:mx-0">
                <a
                  href="https://jobs.ashbyhq.com/Blockworks"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-left cursor-pointer bg-primary text-white border border-transparent hover:border-[#5637cd] hover:bg-white hover: text-[#5637CD] uppercase text-base px-3 py-1.5"
                >
                  See open positions
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center gap-10 px-4 md:px-8 lg:px-12 xl:px-24 py-20 border-t border-b">
          <div className="flex flex-col justify-center items-center relative gap-3">
            <p className="text-sm text-center uppercase text-[#5637cd]">
              culture &amp; values
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl max-w-4xl font-semibold text-center text-[#110b29]">
              We value a flat organization, clear communication, and taking
              ownership over your goals.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap flex-row justify-start items-start self-stretch gap-5">
            <div className="flex flex-col justify-start items-start flex-grow relative gap-1 p-10 border border-[#b4b4b4]/[0.35]">
              <p className="w-full whitespace-nowrap text-xl  text-[#5637CD]">
                Go all in
              </p>
              <p className="text-lg text-[#110b29]">
                Set big goals, believe they’re possible, and push yourself to
                achieve them.
              </p>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow relative gap-1 p-10 border border-[#b4b4b4]/[0.35]">
              <p className="w-full whitespace-nowrap text-xl  text-[#5637CD]">
                Write the rules
              </p>
              <p className="text-lg text-[#110b29]">
                There’s no rulebook, it’s ours to write. Trust yourself to solve
                problems, launch products, and impact change.
              </p>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow relative gap-1 p-10 border border-[#b4b4b4]/[0.35]">
              <p className="w-full whitespace-nowrap text-xl  text-[#5637CD]">
                Mutual trust &amp; respect
              </p>
              <p className="text-lg text-[#110b29]">
                Leave your ego at the door, assume good intent, and have deep
                empathy for our customers and colleagues.
              </p>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow relative gap-1 p-10 border border-[#b4b4b4]/[0.35]">
              <p className="w-full whitespace-nowrap text-xl  text-[#5637CD]">
                Remain curious
              </p>
              <p className="text-lg text-[#110b29]">
                Find passion in your work and in our industry.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-start items-start relative gap-10 px-8 md:px-12 lg:px-24 py-20 bg-[#f7f7f7]">
          <p className="flex-grow-0 flex-shrink-0 text-[32px] text-left text-[#110b29]">
            Benefits
          </p>
          <div className="flex flex-wrap lg:flex-nowrap justify-start items-start gap-10">
            <div className="flex flex-col justify-start items-start flex-grow gap-5">
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M14 17.3334H10.6667V13.3334H14V10H18V13.3334H21.3334V17.3334H18V20.6667H14V17.3334ZM16 2.66669L5.33337 6.66669V14.7867C5.33337 21.52 9.88004 27.8 16 29.3334C22.12 27.8 26.6667 21.52 26.6667 14.7867V6.66669L16 2.66669ZM24 14.7867C24 20.12 20.6 25.0534 16 26.56C11.4 25.0534 8.00004 20.1334 8.00004 14.7867V8.52002L16 5.52002L24 8.52002V14.7867Z"
                    fill="#5637CD"
                  ></path>
                </svg>
                <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-left text-[#110b29]">
                    Health Insurance
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-[#110b29]">
                    We work hard to offer the best medical, dental, and vision
                    insurance possible. We offer insurance for both you and your
                    dependents, covering 100% of insurance for most plans.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M18 2.66669V13.3334H28.6667C28.6667 7.44002 23.8934 2.66669 18 2.66669ZM20.6667 10.6667V5.78669C22.9334 6.58669 24.7334 8.38669 25.5467 10.6667H20.6667ZM9.25337 14.6667L7.98671 12H3.33337V14.6667H6.29337C6.29337 14.6667 8.81337 20.0934 9.12004 20.56C7.65337 21.3467 6.66671 22.8934 6.66671 24.6667C6.66671 27.24 8.76004 29.3334 11.3334 29.3334C13.68 29.3334 15.6267 27.6 15.9467 25.3334H18.72C19.04 27.6 20.9867 29.3334 23.3334 29.3334C25.9067 29.3334 28 27.24 28 24.6667C28 23.28 27.3867 22.04 26.4267 21.1867C27.8267 19.3867 28.6667 17.12 28.6667 14.6667H9.25337ZM11.3334 26.6667C10.2267 26.6667 9.33337 25.7734 9.33337 24.6667C9.33337 23.56 10.2267 22.6667 11.3334 22.6667C12.44 22.6667 13.3334 23.56 13.3334 24.6667C13.3334 25.7734 12.44 26.6667 11.3334 26.6667ZM23.3334 26.6667C22.2267 26.6667 21.3334 25.7734 21.3334 24.6667C21.3334 23.56 22.2267 22.6667 23.3334 22.6667C24.44 22.6667 25.3334 23.56 25.3334 24.6667C25.3334 25.7734 24.44 26.6667 23.3334 26.6667ZM24.32 19.5467L23.9334 20.04C23.7467 20.0134 23.5334 20 23.3334 20C21.48 20 19.8667 21.0934 19.12 22.6667H15.5467C14.88 21.28 13.5467 20.2667 11.9734 20.04L11.3867 19.1467C11.2534 18.92 10.9334 18.2267 10.4934 17.3334H25.5467C25.2667 18.12 24.8534 18.8667 24.32 19.5467Z"
                    fill="#5637CD"
                  ></path>
                </svg>
                <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-left text-[#110b29]">
                    Parental Leave
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-[#110b29]">
                    14 weeks of fully paid parental leave for mothers and
                    fathers, including birth, adoptive, and foster parents --
                    used as needed within 12 months of the child’s birth or
                    adoption.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M20 14C20 13.2667 20.6 12.6667 21.3333 12.6667C22.0666 12.6667 22.6666 13.2667 22.6666 14C22.6666 14.7333 22.0666 15.3333 21.3333 15.3333C20.6 15.3333 20 14.7333 20 14ZM10.6666 12.6667H17.3333V10H10.6666V12.6667ZM29.3333 10.6667V19.96L25.5733 21.2133L23.3333 28.6667H16V26H13.3333V28.6667H5.99996C5.99996 28.6667 2.66663 17.3867 2.66663 13.3333C2.66663 9.28001 5.94663 6.00001 9.99996 6.00001H16.6666C17.88 4.38668 19.8133 3.33334 22 3.33334C23.1066 3.33334 24 4.22668 24 5.33334C24 5.61334 23.9466 5.86668 23.84 6.10668C23.6533 6.56001 23.4933 7.08001 23.4133 7.64001L26.44 10.6667H29.3333ZM26.6666 13.3333H25.3333L20.6666 8.66668C20.6666 7.80001 20.7866 6.94668 21.0133 6.12001C19.72 6.45334 18.6666 7.41334 18.2266 8.66668H9.99996C7.42663 8.66668 5.33329 10.76 5.33329 13.3333C5.33329 15.84 6.95996 22.2 8.01329 26H10.6666V23.3333H18.6666V26H21.3466L23.4133 19.1333L26.6666 18.04V13.3333Z"
                    fill="#5637CD"
                  ></path>
                </svg>
                <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-left text-[#110b29]">
                    401(k) Plan
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-[#110b29]">
                    A 401(k) plan through a seamless integration with our
                    payroll provider.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow gap-5">
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M16.5 4L1.83331 12L7.16665 14.9067V22.9067L16.5 28L25.8333 22.9067V14.9067L28.5 13.4533V22.6667H31.1666V12L16.5 4ZM25.5933 12L16.5 16.96L7.40665 12L16.5 7.04L25.5933 12ZM23.1666 21.32L16.5 24.96L9.83331 21.32V16.36L16.5 20L23.1666 16.36V21.32Z"
                    fill="#5637CD"
                  ></path>
                </svg>
                <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-left text-[#110b29]">
                    Learning &amp; Development
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-[#110b29]">
                    A learning and development stipend to continue improving
                    your knowledge while at Blockworks. This can be used for
                    online courses, attending events, and more.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M25.8333 9.33333H23.1666V12H25.8333V9.33333Z"
                    fill="#5637CD"
                  ></path>
                  <path
                    d="M25.8333 14.6667H23.1666V17.3333H25.8333V14.6667Z"
                    fill="#5637CD"
                  ></path>
                  <path
                    d="M25.8333 20H23.1666V22.6667H25.8333V20Z"
                    fill="#5637CD"
                  ></path>
                  <path
                    d="M1.83331 14.6667V28H9.83331V21.3333H12.5V28H20.5V14.6667L11.1666 8L1.83331 14.6667ZM17.8333 25.3333H15.1666V18.6667H7.16665V25.3333H4.49998V16L11.1666 11.3333L17.8333 16V25.3333Z"
                    fill="#5637CD"
                  ></path>
                  <path
                    d="M13.8333 4V6.62667L16.5 8.53333V6.66667H28.5V25.3333H23.1666V28H31.1666V4H13.8333Z"
                    fill="#5637CD"
                  ></path>
                </svg>
                <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-left text-[#110b29]">
                    Flexible Working Spaces
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-[#110b29]">
                    We have an office in Manhattan. If you’re in New York,
                    you’re welcome to come in whenever you’d like.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M16 5.33334H6.66663C4.45329 5.33334 2.66663 7.12001 2.66663 9.33334V20C2.66663 22.2133 4.45329 24 6.66663 24L5.33329 25.3333V26.6667H6.66663L9.33329 24H12V17.3333H5.33329V8.00001H17.3333V10.6667H20V9.33334C20 7.12001 18.2133 5.33334 16 5.33334ZM6.66663 18.6667C7.39996 18.6667 7.99996 19.2667 7.99996 20C7.99996 20.7333 7.39996 21.3333 6.66663 21.3333C5.93329 21.3333 5.33329 20.7333 5.33329 20C5.33329 19.2667 5.93329 18.6667 6.66663 18.6667ZM27.4266 12.88C27.24 12.3467 26.7333 12 26.1333 12H16.5466C15.9333 12 15.44 12.3467 15.24 12.88L13.3466 18.36V25.7067C13.3466 26.2133 13.76 26.6667 14.2666 26.6667H15.0933C15.6 26.6667 16 26.16 16 25.6533V24H26.6666V25.6533C26.6666 26.16 27.08 26.6667 27.5866 26.6667H28.4C28.9066 26.6667 29.32 26.2133 29.32 25.7067L29.3333 23.88V18.36L27.4266 12.88ZM16.5466 13.3333H26.1333L27.5066 17.3333H15.1733L16.5466 13.3333ZM16 21.3333C15.2666 21.3333 14.6666 20.7333 14.6666 20C14.6666 19.2667 15.2666 18.6667 16 18.6667C16.7333 18.6667 17.3333 19.2667 17.3333 20C17.3333 20.7333 16.7333 21.3333 16 21.3333ZM26.6666 21.3333C25.9333 21.3333 25.3333 20.7333 25.3333 20C25.3333 19.2667 25.9333 18.6667 26.6666 18.6667C27.4 18.6667 28 19.2667 28 20C28 20.7333 27.4 21.3333 26.6666 21.3333Z"
                    fill="#5637CD"
                  ></path>
                </svg>
                <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-left text-[#110b29]">
                    Commuter Stipend
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-left text-[#110b29]"></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full relative gap-10 px-8 md:px-12 lg:px-24 py-20">
          <h4 className="w-full text-4xl text-center text-[#110b29]">
            Application Process
          </h4>
          <div className="relative gap-2.5 relative py-12 lg:text-md xl:text-lg">
            <div className="w-96 lg:w-full mx-auto flex flex-col lg:flex-row justify-start items-start left-0 top-[-0.25px] gap-20">
              <div className="z-0 hidden lg:flex border-b-2 absolute top-[64px] right-12 left-4"></div>
              <div className="z-1 hidden lg:flex border-b-2 border-[#5637cd] w-36 absolute top-[64px] left-4"></div>
              <div className="flex flex-row lg:flex-col justify-center items-center flex-grow gap-5">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-2xl bg-white border-2 border-[#5637cd]">
                  <div className="z-1 block lg:hidden border-l-2 border-[#5637cd] absolute top-7 left-3.5 h-28"></div>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle
                      cx="5.21423"
                      cy="5.75"
                      r="5"
                      fill="#5637CD"
                    ></circle>
                  </svg>
                </div>
                <div className="flex flex-col justify-center items-start relative gap-3">
                  <p className="text-center text-[#110b29]">Apply</p>
                </div>
              </div>
              <div className="relative flex flex-row lg:flex-col justify-center items-center flex-grow gap-5">
                <div className="z-0 block lg:hidden border-l-2 absolute top-7 left-3.5 h-24"></div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-2xl bg-white border-2 border-[#e1e2e3]">
                  <div className="flex-grow-0 flex-shrink-0"></div>
                </div>
                <div className="flex flex-col justify-center items-start relative gap-3">
                  <p className="text-center text-[#110b29]">Interview #1</p>
                </div>
              </div>
              <div className="relative flex flex-row lg:flex-col justify-center items-center flex-grow gap-5">
                <div className="z-0 block lg:hidden border-l-2 absolute top-7 left-3.5 h-24"></div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-2xl bg-white border-2 border-[#e1e2e3]">
                  <div className="flex-grow-0 flex-shrink-0"></div>
                </div>
                <div className="flex flex-col justify-center items-start relative gap-3">
                  <p className="text-center text-[#110b29]">Interview #2</p>
                </div>
              </div>
              <div className="relative flex flex-row lg:flex-col justify-center items-center flex-grow gap-5">
                <div className="z-0 block lg:hidden border-l-2 absolute top-7 left-3.5 h-24"></div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-2xl bg-white border-2 border-[#e1e2e3]">
                  <div className="flex-grow-0 flex-shrink-0"></div>
                </div>
                <div className="flex flex-col justify-center items-start relative gap-3">
                  <p className="text-center text-[#110b29]">
                    Take Home Assignment
                  </p>
                </div>
              </div>
              <div className="relative flex flex-row lg:flex-col justify-center items-center flex-grow gap-5">
                <div className="z-0 block lg:hidden border-l-2 absolute top-7 left-3.5 h-24"></div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-2xl bg-white border-2 border-[#e1e2e3]">
                  <div className="flex-grow-0 flex-shrink-0"></div>
                </div>
                <div className="flex flex-col justify-center items-start relative gap-3">
                  <p className="text-center text-[#110b29]">
                    Interview #3 Meet the team
                  </p>
                </div>
              </div>
              <div className="relative flex flex-row lg:flex-col justify-center items-center flex-grow gap-5">
                <div className="z-0 hidden lg:flex border-b-2 absolute top-4 -right-24 left-0"></div>
                <div className="z-0 block lg:hidden border-l-2 absolute top-7 left-3.5 h-24"></div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-2xl bg-white border-2 border-[#e1e2e3]">
                  <div className="flex-grow-0 flex-shrink-0"></div>
                </div>
                <div className="flex flex-col justify-center items-start relative gap-3">
                  <p className="text-lg text-center text-[#110b29]">
                    Reference Checks
                  </p>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col justify-center items-center flex-grow gap-5">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative rounded-2xl bg-white border-2 border-[#e1e2e3]">
                  <div className="flex-grow-0 flex-shrink-0"></div>
                </div>
                <div className="flex flex-col justify-center items-start relative gap-3">
                  <p className="text-lg text-center text-[#110b29]">
                    Offer Letter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="flex gap-10 border-t-0 border-r-0 border-b-0 border-l-4 border-event-accent border-black  px-5 sm:px-12 md:px-24 xl:px-48 py-24 bg-[#f7f7f7]">
          <div className="flex flex-col justify-start items-start w-full gap-2.5 pl-5 md:pl-10 lg:pl-14">
            <div className="flex flex-col justify-center items-center self-stretch">
              <div className="flex flex-col justify-start items-start self-stretch gap-3">
                <span className="text-sm text-left uppercase text-[#5637cd]">
                  diversity &amp; inclusion
                </span>
                <div className="mt-10 flex flex-col justify-center items-start self-stretch gap-5">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-left text-[#110b29]">
                    We're committed to Equal Opportunity
                  </h3>
                </div>
                <span className="self-stretch flex-grow-0 flex-shrink-0 text-md md:text-lg text-left text-[#110b29]">
                  We know that diversity makes for the best problem-solving and
                  creative thinking. We are dedicated to adding new perspectives
                  to the team and encourage everyone to apply if your experience
                  is close to what we are looking for.
                </span>
                <span className="self-stretch flex-grow-0 flex-shrink-0 text-md md:text-lg text-left text-[#110b29]">
                  Blockworks is committed to creating a diverse environment and
                  is proud to be an equal opportunity employer. All qualified
                  applicants will receive consideration for employment without
                  regard to race, color, religion, gender, gender identity or
                  expression, sexual orientation, national origin, genetics,
                  disability, age, or veteran status.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
