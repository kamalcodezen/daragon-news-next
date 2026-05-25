"use client";

import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {


  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    // console.log(data, "google login");
  };

  const handleGithubLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div>
      <h2 className="text-md font-black">Login With</h2>

      <div className="flex flex-col gap-3 mt-3">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <FaGoogle className="text-[#EA4335]" />
          <span>Login With Google</span>
        </button>

        <button
          onClick={handleGithubLogin}
          className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <FaGithub /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
