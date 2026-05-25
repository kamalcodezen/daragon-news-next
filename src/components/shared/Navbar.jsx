"use client";

import Image from "next/image";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient, signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },

    {
      id: 2,
      name: "About",
      path: "/about",
    },

    {
      id: 3,
      name: "Career",
      path: "/career",
    },
  ];

  const { data, isPending } = useSession();
  const user = data?.user;

  // console.log(user);

  return (
    <nav className="w-11/12 mx-auto bg-gray-100 rounded-full  py-1.5 px-2 grid grid-cols-12 md:gap-7 my-6 ">
      <div className="lg:col-span-3">
        {/* <Image height={40} width={40} src={userAvatar} alt="User Avatar" />  */}
      </div>
      <div className="  flex justify-center gap-2 items-center sm:col-span-6 col-span-8">
        {navLinks.slice(0, user ? navLinks.length : 2).map((link) => (
          <NavLink key={link.id} path={link.path} name={link.name}></NavLink>
        ))}
      </div>

      <div className="sm:col-span-3 col-span-2 flex justify-end">
        {isPending ? (
          <span className="loading loading-spinner loading-lg text-orange-500 "></span>
        ) : user ? (
          <div className="dropdown dropdown-end">
            {/* AVATAR */}
            <div
              tabIndex={0}
              role="button"
              className="flex cursor-pointer items-center gap-3 rounded-full border  bg-white md:px-3   md:py-0.5   shadow-sm transition "
            >
              <Image
                height={30}
                width={30}
                src={user.image || userAvatar}
                alt={user.name}
                className=" h-10 w-10 rounded-full object-cover"
              />
              <div className="hidden md:block">
                <h2 className=" text-sm font-bold text-gray-800">
                  {user.name}
                </h2>

                <p className="text-xs text-gray-500">My Account</p>
              </div>
            </div>

            {/* DROPDOWN */}
            <ul
              tabIndex={0}
              className=" dropdown-content z-[100] mt-4 w-64 rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl"
            >
              {/* USER INFO */}
              <div className=" mb-3 border-b pb-3 ">
                <h2 className=" text-base font-bold text-gray-800 ">
                  {user.name}
                </h2>

                <p className="text-sm text-gray-500 ">{user.email}</p>
              </div>

              {/* MENU */}
              <li>
                <Link
                  href="/career"
                  className="rounded-xl px-4   py-3 text-sm
                font-medium transition hover:bg-gray-100"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="
                rounded-xl
                px-4
                py-3

                text-sm
                font-medium

                transition

                hover:bg-gray-100
              "
                >
                  Career
                </Link>
              </li>

              {/* LOGOUT */}
              <li className="mt-2">
                <button
                  onClick={() => signOut()}
                  className="
                w-full

                rounded-xl

                bg-gradient-to-r
                from-red-600
                via-red-500
                to-orange-500

                px-4
                py-3

                text-sm
                font-bold
                text-white

                transition-all
                duration-300

                hover:scale-[1.02]
              "
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login">
            <button
              className="
            btn rounded-full flex justify-end
            border-0

            px-7

            text-gray-100

            bg-gradient-to-r
            from-red-600
            via-red-500
            to-orange-500
          "
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
