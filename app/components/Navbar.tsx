"use client";

import { useRef, useState } from "react";
import { createClasses } from "../utils/layout";
import Link from "next/link";

export const Navbar = () => {
  const overlay = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuOpen = () => {
    document.body.style.overflow = "hidden";
    setShowMenu(true);
    setTimeout(() => {
      overlay.current!.classList.replace("bg-opacity-0", "bg-opacity-40");
      menu.current?.classList.replace(
        "translate-x-[-100vw]",
        "translate-x-[0vw]"
      );
    }, 20);
  };
  const handleMenuClose = () => {
    document.body.style.overflow = "auto";

    overlay.current?.classList.replace("bg-opacity-40", "bg-opacity-0");
    menu.current?.classList.replace(
      "translate-x-[0vw]",
      "translate-x-[-100vw]"
    );
    setTimeout(() => {
      setShowMenu(false);
    }, 350);
  };

  return (
    <>
      {showMenu && (
        <div
          ref={overlay}
          id="menu-overlay"
          className="fixed left-0 top-0 z-[60] h-full w-full bg-black bg-opacity-40 transition-all duration-200"
          onClick={handleMenuClose}
        >
          <nav
            ref={menu}
            id="main-menu"
            className={createClasses(
              "flex h-full w-full translate-x-[-100vw] flex-col items-center bg-white p-8 transition-all duration-200 lg:w-1/2 xl:w-1/3"
            )}
          >
            <h1 className="mb-6 text-center text-2xl font-bold uppercase">
              Menu
            </h1>

            <ul className="flex flex-col gap-12 ">
              <li className="flex items-center justify-center text-2xl ">
                <Link href="/" onClick={handleMenuClose}>
                  Start
                </Link>
              </li>

              <li className="flex items-center justify-center text-2xl ">
                <a href="/#about" onClick={handleMenuClose}>
                  Om mig
                </a>
              </li>

              <li className="flex items-center justify-center text-2xl ">
                <Link href="/blog" onClick={handleMenuClose}>
                  Blogg
                </Link>
              </li>

              <li className="flex items-center justify-center text-2xl ">
                <a href="/projects" onClick={handleMenuClose}>
                  Projekt
                </a>
              </li>

              <li className="flex items-center justify-center text-2xl ">
                <Link href="/" onClick={handleMenuClose}>
                  Kontakta mig
                </Link>
              </li>
            </ul>

            <button className="mt-auto text-2xl" onClick={handleMenuClose}>
              Stäng
            </button>
          </nav>
        </div>
      )}

      <nav className="sticky top-0 z-50 flex items-center border-b bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <svg
            width="36"
            height="36"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="37.5" stroke="black" strokeWidth="5" />
            <path
              d="M36.0909 41.3636C36.0909 43.8712 35.6212 46.0189 34.6818 47.8068C33.75 49.5871 32.4773 50.9508 30.8636 51.8977C29.2576 52.8447 27.4356 53.3182 25.3977 53.3182C23.3598 53.3182 21.5341 52.8447 19.9205 51.8977C18.3144 50.9432 17.0417 49.5758 16.1023 47.7955C15.1705 46.0076 14.7045 43.8636 14.7045 41.3636C14.7045 38.8561 15.1705 36.7121 16.1023 34.9318C17.0417 33.1439 18.3144 31.7765 19.9205 30.8295C21.5341 29.8826 23.3598 29.4091 25.3977 29.4091C27.4356 29.4091 29.2576 29.8826 30.8636 30.8295C32.4773 31.7765 33.75 33.1439 34.6818 34.9318C35.6212 36.7121 36.0909 38.8561 36.0909 41.3636ZM31.8523 41.3636C31.8523 39.5985 31.5758 38.1098 31.0227 36.8977C30.4773 35.678 29.7197 34.7576 28.75 34.1364C27.7803 33.5076 26.6629 33.1932 25.3977 33.1932C24.1326 33.1932 23.0152 33.5076 22.0455 34.1364C21.0758 34.7576 20.3144 35.678 19.7614 36.8977C19.2159 38.1098 18.9432 39.5985 18.9432 41.3636C18.9432 43.1288 19.2159 44.6212 19.7614 45.8409C20.3144 47.053 21.0758 47.9735 22.0455 48.6023C23.0152 49.2235 24.1326 49.5341 25.3977 49.5341C26.6629 49.5341 27.7803 49.2235 28.75 48.6023C29.7197 47.9735 30.4773 47.053 31.0227 45.8409C31.5758 44.6212 31.8523 43.1288 31.8523 41.3636ZM40.9602 53.25C40.2708 53.25 39.6799 53.0076 39.1875 52.5227C38.6951 52.0379 38.4527 51.447 38.4602 50.75C38.4527 50.0682 38.6951 49.4848 39.1875 49C39.6799 48.5152 40.2708 48.2727 40.9602 48.2727C41.6269 48.2727 42.2064 48.5152 42.6989 49C43.1989 49.4848 43.4527 50.0682 43.4602 50.75C43.4527 51.2121 43.3314 51.6326 43.0966 52.0114C42.8693 52.3902 42.5663 52.6932 42.1875 52.9205C41.8163 53.1402 41.4072 53.25 40.9602 53.25ZM47.8892 53V29.7273H63.0256V33.2614H52.1051V39.5795H62.2415V43.1136H52.1051V49.4659H63.1165V53H47.8892Z"
              fill="black"
            />
          </svg>

          <div>
            <p className="text-sm font-bold">Oskar Eriksson</p>
            <p className="text-xs text-gray-600">Fullstack Developer</p>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <p className="font-bold">Menu</p>
          <svg
            onClick={handleMenuOpen}
            role="button"
            className=" h-8 w-8 cursor-pointer"
            fill="currentColor"
            strokeWidth="0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </div>
      </nav>
    </>
  );
};
