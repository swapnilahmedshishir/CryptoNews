import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

const NewsNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* larg sceen menu bar  */}
      <div className="hidden lg:block">
        <ul className="flex basis-auto uppercase gap-3 relative">
          <li className="relative" onClick={() => setIsOpen(!isOpen)}>
            <button
              className="text-black group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              id="headlessui-popover-button-:r2:"
            >
              <span className="uppercase hover:text-light-gray">news</span>{" "}
              <IoChevronDownOutline className="ml-2" />
            </button>

            <div className={`${isOpen ? "hidden" : "block"}`}>
              <div
                className="absolute border-t border-r border-b z-20 -ml-4 mt-2 transform px-2 w-screen max-w-md sm:px-0 lg:ml-3 lg:left-0 lg:-translate-x-6"
                id="headlessui-popover-panel-:rp:"
                tabIndex="-1"
                data-headlessui-state="open"
              >
                <div className="ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-6 sm:p-6">
                    <NavLink
                      className="flex -m-3 p-2 items-start hover:bg-gray-50"
                      to="/category/markets"
                    >
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        crypto
                      </span>
                    </NavLink>
                    <NavLink
                      className="flex -m-3 p-2 items-start hover:bg-gray-50"
                      to="/category/finance"
                    >
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        Finance
                      </span>
                    </NavLink>
                    <NavLink
                      className="flex -m-3 p-2 items-start hover:bg-gray-50"
                      to="/category/policy"
                    >
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        business
                      </span>
                    </NavLink>
                    <NavLink
                      className="flex -m-3 p-2 items-start hover:bg-gray-50"
                      to="/category/business"
                    >
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        analysis
                      </span>
                    </NavLink>
                    <NavLink
                      className="flex -m-3 p-2 items-start hover:bg-gray-50"
                      to="/category/defi"
                    >
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        opinion
                      </span>
                    </NavLink>
                    <NavLink
                      className="flex -m-3 p-2 items-start hover:bg-gray-50"
                      to="/category/web3"
                    >
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        Web3
                      </span>
                    </NavLink>
                    <NavLink
                      className="flex -m-3 p-2 items-start hover:bg-gray-50"
                      to="/category/people"
                    >
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        defi
                      </span>
                    </NavLink>
                    <NavLink
                      className="flex -m-3 p-2 items-start hover:bg-gray-50"
                      to="/category/opinion"
                    >
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        people
                      </span>
                    </NavLink>
                    <NavLink
                      className="flex -m-3 p-2 items-start hover:bg-gray-50"
                      to="/category/education"
                    >
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        Education
                      </span>
                    </NavLink>
                    <NavLink
                      className="flex -m-3 p-2 items-start hover:bg-gray-50"
                      to="/category/sponsored"
                    >
                      <span className="ml-2 text-xs font-medium text-gray-900">
                        Sponsored
                      </span>
                    </NavLink>
                  </div>
                  <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <NavLink className="flow-root" to="/news">
                      <span className="-m-3 p-2 flex items-center rounded-md text-xs font-medium text-gray-900 hover:bg-gray-100">
                        News Archive
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NewsNav;
