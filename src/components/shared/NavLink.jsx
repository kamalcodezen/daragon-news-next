"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ path, name }) => {
  const pathName = usePathname();
  return (
    <>
      <Link
        className={`bg-gray-100 py-1.5 px-1 sm:px-4 rounded-full font-medium  ${pathName === path ? "text-gray-200 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-1.5 px-4 rounded-full" : ""}`}
        href={path}
      >
        {name}
      </Link>
    </>
  );
};

export default NavLink;
