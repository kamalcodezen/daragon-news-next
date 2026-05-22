import Image from "next/image";
import logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="w-11/12 mx-auto text-center py-8 space-y-2">
      <Image className="mx-auto text-gray-200" src={logo} alt="logo"></Image>
      <p className="text-gray-400 text-sm">Journalism Without Fear or Favour</p>
      <p>{format(new Date(), " EEEE, MMM dd , yyyy")}</p>
    </div>
  );
};

export default Header;
