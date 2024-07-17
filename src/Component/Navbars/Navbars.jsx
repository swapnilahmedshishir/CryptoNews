import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { FaXmark } from "react-icons/fa6";
import NewsNav from "./NewsNav";
import NavMenuItems from "./NavMenuItems";

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
                {/* news small secren  */}
                <div className={`${isOpen ? "hidden" : "block"}`}>
                  <div className="absolute md:rounded-lg md:shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 w-80 md:w-[390px] p-2 -top-4 -left-4 ">
                    <div className="pt-4 pb-6 px-4 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <NavLink to="/" className="">
                            <img src="/Tojo-News-Logo-300px.png" alt="logo" />
                          </NavLink>
                        </div>
                        <button
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
                        {/* Nav menu items  */}
                        <NavMenuItems />
                      </div>
                    </div>
                    <div className="py-6 px-5 space-y-6 text-xs">
                      <nav className="grid grid-cols-2 gap-y-4 gap-x-8">
                        <NavLink
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          to="/newsletter"
                        >
                          Newsletter
                        </NavLink>
                        <NavLink
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          to="/podcasts"
                        >
                          Podcasts
                        </NavLink>

                        <NavLink
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          to="/prices"
                        >
                          Prices
                        </NavLink>
                        <NavLink
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          to="/events"
                        >
                          Events
                        </NavLink>
                        <NavLink
                          className="p-3 flex items-center rounded-md hover:text-gray-900 font-medium text-gray-900"
                          to="/roundtables"
                        >
                          Roundtables
                        </NavLink>
                        <NavLink
                          to=""
                          className="flex items-center font-medium text-gray-900 py-1 px-2 hover:bg-primary hover:text-white"
                        >
                          Get Research
                        </NavLink>
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
                <NavLink to="/newsletters" className="">
                  newsletters
                </NavLink>
              </li>
              <li className=" mx-2">
                <NavLink to="/podcasts" className="">
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
                  <NavLink to="/prices" className="">
                    PRICES
                  </NavLink>
                </li>
                <li className=" mx-2">
                  <NavLink to="/events" className="">
                    EVENTS
                  </NavLink>
                </li>
                <li className=" mx-2">
                  <NavLink to="/roundtables" className="">
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
