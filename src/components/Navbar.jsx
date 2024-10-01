"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    {
      title: "posts",
      path: "/posts",
    },
    {
      title: "meals",
      path: "/meals",
    },
    {
      title: "time",
      path: "/time",
    },
  ];
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <div className="flex justify-center items-center gap-8">
                {links.map((link) => (
                  <Link
                    className={`${pathName === link.path && "text-orange-500"}`}
                    key={link.path}
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            Next Js Project
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex justify-center items-center gap-8">
              {links.map((link) => (
                <Link
                  className={`${pathName === link.path && "text-orange-500"}`}
                  key={link.path}
                  href={link.path}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
