import Link from "next/link";
import {
  FaEye,
  FaStar,
  FaShareAlt,
  FaBookmark,
  FaClock,
  FaFire,
} from "react-icons/fa";
import { getNewsDetailsById } from "@/lib/data";
import BackButton from "@/components/shared/BackButton";

export const generateMetadata = async ({ params }) => {
  const { newsId } = await params;
  const newsDetails = await getNewsDetailsById(newsId);
  return {
    title: newsDetails.title,
    description: newsDetails.details,
  };
};

const NewsDetails = async ({ params }) => {
  const { newsId } = await params;
  // console.log(newsId,"newsId")

  const newsDetails = await getNewsDetailsById(newsId);
  console.log(newsDetails, "newsDetails");

  const {
    category_id,
    title,
    image_url,
    details,
    total_view,
    rating,
    author,
    others_info,
  } = newsDetails;

  return (
    <div className="w-10/12 mx-auto mb-20 relative">
      
      <div className="absolute top-[-60] ">
        <BackButton />
      </div>
      <div className="max-w-4xl mx-auto mt-20">
        
        <div className=" group relative overflow-hidden rounded-[15px] bg-white border border-gray-200 shadow-xl hover:shadow-xl transition-all duration-500 mb-5">
          {/* LIVE Badge */}
          <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full shadow-lg animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-sm font-bold">LIVE</span>
          </div>

          {/* Trending Badge */}
          {others_info?.is_trending && (
            <div className="absolute top-5 right-5 z-20 bg-orange-500 text-white px-4 py-1 rounded-full flex items-center gap-2 shadow-lg">
              <FaFire />
              <span className="text-sm font-semibold">Trending</span>
            </div>
          )}

          {/* News Image */}
          <div className="relative overflow-hidden">
            <img
              src={image_url}
              alt={title}
              className="w-full h-[320px]  group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            {/* Title */}
            <div className="absolute bottom-0 p-7 text-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                  WORLD NEWS
                </span>

                <span className="flex items-center gap-1 text-sm text-gray-200">
                  <FaClock />2 min ago
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black leading-tight group-hover:text-blue-300 transition duration-300">
                {title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-7">
            {/* Author */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <img
                  src={author?.img}
                  alt={author?.name}
                  className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
                />

                <div>
                  <h2 className="font-bold text-gray-800 text-lg">
                    {author?.name || "Unknown Author"}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    {author?.published_date || "No Date"}
                  </p>
                </div>
              </div>

              {/* Icons */}
              <div className="flex gap-4 text-xl text-gray-400">
                <button>
                  <FaBookmark className="cursor-pointer hover:text-blue-600 transition duration-300" />
                </button>

                <button>
                  <FaShareAlt className="cursor-pointer hover:text-blue-600 transition duration-300" />
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-8 text-[16px] md:text-[17px]">
              {details}
            </p>

            {/* Bottom */}
            <div className="mt-1 pt-2 border-t flex items-center justify-between">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400 text-xl" />

                <span className="font-bold text-lg">{rating?.number || 0}</span>

                <span className="text-gray-500">
                  ({rating?.badge || "Good"})
                </span>
              </div>

              {/* Views */}
              <div className="flex items-center gap-2 text-gray-700">
                <FaEye className="text-blue-600 text-lg" />

                <span className="font-bold text-lg">{total_view || 0}</span>
              </div>
            </div>

            {/* Button */}

            <Link href={`/category/${category_id}`}>
              <button className="mt-7 px-5 py-2 rounded-full bg-black text-white font-bold text-lg hover:bg-gradient-to-r from-red-600 via-red-500 to-orange-500 transition-all duration-300 tracking-wide hover:scale-[1.02]">
                See other news for this same category →
              </button>
            </Link>
          </div>

          {/* Animated Border */}
          <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 transition-all duration-700"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
