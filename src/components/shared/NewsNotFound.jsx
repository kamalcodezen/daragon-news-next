import { FaNewspaper, FaGlobeAsia } from "react-icons/fa";
import BackButton from "./BackButton";

const NewsNotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-[40px] shadow-2xl border border-gray-200 overflow-hidden">
        {/* Top Gradient */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-blue-500 to-purple-500"></div>

        <div className="p-10 text-center">
          {/* Icon */}
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute w-36 h-36 bg-blue-100 rounded-full animate-ping opacity-30"></div>

            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-2xl">
              <FaNewspaper className="text-white text-6xl" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-5 py-2 rounded-full font-bold mb-6">
            <FaGlobeAsia />

            <span>BREAKING NEWS ALERT</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight">
            News Not Found
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 text-lg leading-8 max-w-xl mx-auto">
            Sorry, we couldn’t find any real-time news for this category right
            now. Please check back later for the latest world headlines and
            breaking stories.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* <button className="px-8 py-4 rounded-2xl bg-black text-white font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:scale-105">
              Back To Home
            </button> */}
            <BackButton />
            {/* <button className="px-8 py-4 rounded-2xl border-2 border-gray-300 text-gray-700 font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              Refresh News
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsNotFound;
