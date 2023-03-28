import React from "react";
import { Link } from "react-router-dom";
import { iconData } from "../data/iconData";

const NavBar = () => {
  return (
    <div className="flex justify-center text-white bg-black text-xl">
      <nav className="flex justify-center text-center m-3 w-container">
        <span className="rounded-md px-2 py-1 font-bold bg-logo ">
          <Link to="/">CMDb</Link>
        </span>
        <div className="flex bg-white text-black justify-center text-center ml-5 rounded-md">
          <input
            className="w-searchBarWidth px-2"
            type="search"
            placeholder="Search on CMDb"
          />
          <button className="px-2">{iconData.search}</button>
        </div>
        <div className="w-96 flex justify-between ml-5">
          <label className="flex cursor-pointer items-center">
            <button className="mr-1">{iconData.menuIcon}</button>
            <span>Menu</span>
          </label>
          <label className="flex cursor-pointer items-center">
            <button className="mr-1">{iconData.bookMark}</button>
            <span>WatchList</span>
          </label>
          <div className="flex items-center">
            <Link to="/auth">Sign In</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
