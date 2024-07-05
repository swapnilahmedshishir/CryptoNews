import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { FaXmark } from "react-icons/fa6";
import NewsNav from "./NewsNav";

const Navbars = () => {
  // const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);

  //   var element = document.getElementById("responsive-navbar-nav");
  //   element.classList.remove("show");
  // };

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="text-center bg-[#5637CD] py-2">
        <span className="text-white text-[13px] font-bold">
          Tojo News Roundtable | The Evolution of Trading Onchain |{" "}
          <Link to="#" className="underline">
            Register Now
          </Link>
        </span>
      </div>
      <div className="border-gray-100 border-solid border-b-2">
        <div className="flex justify-between md:justify-normal lg:justify-between  items-center mx-3">
          {/* colpace button */}
          <div className="block lg:hidden relative z-10">
            <ul className="flex basis-auto uppercase gap-3">
              <li className="" onClick={() => setIsOpen(!isOpen)}>
                <button
                  className="text-black group rounded-md inline-flex items-center font-medium hover:text-gray-900 outline-none focus:outline-[#5637CD]"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:r2:"
                >
                  <IoReorderThreeOutline className="text-3xl mx-2 my-1" />
                </button>

                <div className={`${isOpen ? "hidden" : "block"}`}>
                  <div className="absolute md:rounded-lg md:shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 w-80 md:w-96 p-2 -top-4 -left-2 ">
                    <div className="pt-4 pb-6 px-4 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <NavLink to="/" className="">
                            <img src="/Tojo- News-Logo-300px.png" alt="logo" />
                          </NavLink>
                        </div>
                        <button
                          // className="text-black group rounded-md inline-flex items-center font-medium hover:text-gray-900 outline-[#5637CD] "
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                          type="button"
                          aria-expanded="false"
                          data-headlessui-state=""
                          id="headlessui-popover-button-:r2:"
                        >
                          <FaXmark className="text-3xl mx-2 my-1" />
                        </button>
                      </div>
                      <div className="mt-6 px-1">
                        <nav className="grid grid-cols-2 gap-y-4 gap-x-8 md:gap-x-8">
                          <a
                            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            href="/category/markets"
                          >
                            crypto
                          </a>
                          <a
                            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            href="/category/finance"
                          >
                            Finance
                          </a>
                          <a
                            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            href="/category/policy"
                          >
                            Business
                          </a>
                          <a
                            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            href="/category/business"
                          >
                            Analysis
                          </a>
                          <a
                            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            href="/category/defi"
                          >
                            Opinion
                          </a>
                          <a
                            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            href="/category/web3"
                          >
                            Web3
                          </a>
                          <a
                            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            href="/category/people"
                          >
                            DeFi
                          </a>
                          <a
                            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            href="/category/opinion"
                          >
                            People
                          </a>
                          <a
                            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            href="/category/education"
                          >
                            Education
                          </a>
                          <a
                            className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            href="/category/sponsored"
                          >
                            Sponsored
                          </a>
                        </nav>
                      </div>
                    </div>
                    <div className="py-6 px-5 space-y-6 text-xs">
                      <nav className="grid grid-cols-2 gap-y-4 gap-x-8">
                        <a
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          href="/news"
                        >
                          Latest News
                        </a>
                        <a
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          href="/newsletter"
                        >
                          Newsletter
                        </a>
                        <a
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          href="/podcasts"
                        >
                          Podcasts
                        </a>

                        <a
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          href="/prices"
                        >
                          Prices
                        </a>
                        <a
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          href="/events"
                        >
                          Events
                        </a>
                        <a
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          href="/roundtables"
                        >
                          Roundtables
                        </a>
                        <a
                          href=""
                          className="flex items-center font-medium text-gray-900 text-[#5637CD] py-1 px-2 hover:bg-primary hover:text-white"
                        >
                          Get Research
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* News large screen menu bar  */}
          <div className="hidden lg:block">
            <ul className="flex basis-auto uppercase gap-3 relative">
              <NewsNav />
              <li className=" mx-2">
                <NavLink to="/home" className="">
                  newsletters
                </NavLink>
              </li>
              <li className=" mx-2">
                <NavLink to="/home" className="">
                  podcasts
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="pr-28 lg:pr-1">
            <NavLink to="/" className="">
              <img src="/Tojo-News-Logo-150px.png" alt="logo" />
            </NavLink>
          </div>
          <div className="flex">
            <div className="hidden md:block">
              <ul className="flex basis-auto  uppercase">
                <li className=" mx-2">
                  <NavLink to="/home" className="">
                    PRICES
                  </NavLink>
                </li>
                <li className=" mx-2">
                  <NavLink to="/home" className="">
                    EVENTS
                  </NavLink>
                </li>
                <li className=" mx-2">
                  <NavLink to="/home" className="">
                    ROUNDTABLES
                  </NavLink>
                </li>
                <li></li>
              </ul>
            </div>
            <div>
              <NavLink
                to="/search"
                className="block hover:text-gray-500 text-gray-700"
              >
                <button
                  className="text-black group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:r2:"
                >
                  <span>
                    <GoSearch className="ml-3 text-2xl" />
                  </span>
                </button>
              </NavLink>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbars;
