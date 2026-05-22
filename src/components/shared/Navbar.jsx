import Image from "next/image";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import Link from "next/link";

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
  return (
    <nav className="w-11/12 mx-auto flex justify-between items-center py-4 ">
      <div>
        <Image height={40} width={40} src={userAvatar} alt="User Avatar" />
      </div>
      <div className="bg-gray-100 py-1.5 px-2 rounded-full flex gap-2 items-center">
        {navLinks.map((link) => (
          <NavLink key={link.id} path={link.path} name={link.name}></NavLink>
        ))}
      </div>
      <div className="">
        <Link href={"/login"}>
          <button className="btn px-7 text-gray-200 bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
