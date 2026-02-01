import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [count, setCount] = useState(0);
  const [menu, setMenu] = useState("shop");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex justify-between items-center lg:px-20 md:px-16 sm:px-8 sticky top-0 bg-white">
        <div className="flex items-center justify-center">
          <img src="/logo.jpeg" alt="fashion-logo" className="h-24 w-24" />
          <Link className="font-bold text-xl" to="/">
            Hayat
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-10 cursor-pointer">
            <li>
              <Link
                onClick={() => {
                  setMenu("shop");
                }}
                to="/"
              >
                Shop
                {menu === "shop" ? (
                  <hr className="border-0 w-80% h-1 bg-red-900" />
                ) : (
                  <></>
                )}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setMenu("men");
                }}
                to="/men"
              >
                Men{" "}
                {menu === "men" ? (
                  <hr className="border-0 w-80% h-1 bg-red-900" />
                ) : (
                  <></>
                )}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setMenu("women");
                }}
                to="/women"
              >
                Women Corporate{" "}
                {menu === "women" ? (
                  <hr className="border-0 w-80% h-1 bg-red-900" />
                ) : (
                  <></>
                )}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setMenu("kids");
                }}
                to="/kids"
              >
                Kids{" "}
                {menu === "kids" ? (
                  <hr className="border-0 w-80% h-1 bg-red-900" />
                ) : (
                  <></>
                )}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setMenu("modest");
                }}
                to="/modest"
              >
                Modest Fashion{" "}
                {menu === "modest" ? (
                  <hr className="border-0 w-80% h-1 bg-red-900" />
                ) : (
                  <></>
                )}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link to="/login">
            <button className="border outline-0 rounded-2xl px-4 py-1 cursor-pointer active:bg-amber-800 hover:bg-cyan-800">
              Login
            </button>
          </Link>
          <Link to="/cart">
            <BsCart4 size={28} />
          </Link>
          <div className="w-4 h-4 rounded-xl flex justify-center items-center -mt-4 -ml-7 font-bold bg-red-600 text-white">
            {count}
          </div>
        </div>
        <div className="md:hidden" onClick={handleNav}>
          {nav ? <FaTimes size={24} /> : <LuMenu size={24} />}
        </div>
      </div>

      <ul
        className={`${
          nav
            ? "text-white opacity-100 transform translate-x-0"
            : "opacity-0 transform -translate-y-full"
        }
        transform transistion absolute top-0 left-0 flex flex-col bg-cyan-950 gap-4 text-gray-600 w-60 h-full justify-center items-center font-bold text-2xl`}
        onClick={() => setNav(false)}
      >
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Female Corporate</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
        <li>
          <Link to="/kids">Modest Fashion</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
