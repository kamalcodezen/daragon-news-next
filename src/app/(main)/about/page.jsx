"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="mx-auto my-10 flex items-center gap-2 bg-black/80 hover:bg-red-600 text-white px-5 py-2 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft className="text-lg" />

        <span className="font-semibold">Back</span>
      </button>
    </div>
  );
};

export default AboutPage;
