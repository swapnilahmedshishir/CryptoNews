import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavMenuItems = () => {
  return (
    <>
      <nav className="grid grid-cols-2 gap-y-4 gap-x-8 md:gap-x-9 lg:gap-x-40 lg:gap-y-0">
        <NavLink
          className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
          to="/category/markets"
        >
          crypto
        </NavLink>
        <NavLink
          className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
          to="/category/finance"
        >
          Finance
        </NavLink>
        <NavLink
          className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
          to="/category/policy"
        >
          Business
        </NavLink>
        <NavLink
          className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
          to="/category/business"
        >
          Analysis
        </NavLink>
        <NavLink
          className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
          to="/category/defi"
        >
          Opinion
        </NavLink>
        <NavLink
          className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
          to="/category/web3"
        >
          Web3
        </NavLink>
        <NavLink
          className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
          to="/category/people"
        >
          DeFi
        </NavLink>
        <NavLink
          className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
          to="/category/opinion"
        >
          People
        </NavLink>
        <NavLink
          className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
          to="/category/education"
        >
          Education
        </NavLink>
        <NavLink
          className="p-3 flex items-center font-medium text-gray-900 rounded-md hover:bg-gray-50"
          to="/category/sponsored"
        >
          Sponsored
        </NavLink>
      </nav>
    </>
  );
};

export default NavMenuItems;
