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

  console.log(user);

  return (
    <nav className="w-11/12 mx-auto flex justify-between items-center py-5 ">
      <div>
        <Image height={40} width={40} src={userAvatar} alt="User Avatar" />
      </div>
      <div className="bg-gray-100 py-1.5 px-2 rounded-full flex gap-2 items-center">
        {navLinks.map((link) => (
          <NavLink key={link.id} path={link.path} name={link.name}></NavLink>
        ))}
      </div>
      <div className="">
        {isPending ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : user ? (
          <div className="flex items-center gap-3">
            <p>{user.name}</p>
            <Image
              height={30}
              width={30}
              src={user.image || userAvatar}
              alt={user.name}
            />
            <button
              onClick={() => signOut()}
              className="btn px-7 text-gray-200 bg-gradient-to-r from-red-600 via-red-500 to-orange-500"
            >
              LogOut
            </button>
          </div>
        ) : (
          <>
            <Link href={"/login"}>
              <button className="btn px-7 text-gray-200 bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
