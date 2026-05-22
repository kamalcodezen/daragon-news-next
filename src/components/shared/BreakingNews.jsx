

import Marquee from "react-fast-marquee";

import { Flame, Sparkles, TrendingUp, Globe } from "lucide-react";


const BreakingNews = () => {
  const breakingNewsData = [
    {
      id: 1,
      title: "Massive Earthquake Hits Japan, Thousands Evacuated",
    },

    {
      id: 2,
      title: "Apple Announces Revolutionary AI Features For iPhone",
    },

    {
      id: 3,
      title: "SpaceX Successfully Launches Next Generation Rocket",
    },

    {
      id: 4,
      title: "India Wins Thrilling Cricket Series Finale",
    },

    {
      id: 5,
      title: "Bitcoin Surges Past Record Breaking Price Overnight",
    },

    {
      id: 6,
      title: "Global Climate Summit Reveals Major New Agreements",
    },

    {
      id: 7,
      title: "New Marvel Movie Breaks Worldwide Box Office Records",
    },

    {
      id: 8,
      title: "Samsung Unveils Futuristic Foldable Smartphone",
    },
  ];

  return (
    <section className={`relative overflow-hidden border-y border-white/10 bg-[#020617] w-11/12 mx-auto`}>
      {/* PREMIUM BACKGROUND */}

      {/* <div className="absolute inset-0"> */}
      {/* GRID */}

      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" /> */}

      {/* GLOW */}

      {/* <div className="absolute left-[-10%] top-[-100px] h-[300px] w-[300px] rounded-full bg-red-500/20 blur-3xl" /> */}

      {/* <div className="absolute right-[-10%] top-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl" /> */}
      {/* </div> */}

      {/* MAIN */}

      <div className="relative flex h-15 items-center">
        {/* LEFT SIDE */}

        <div className="relative flex h-full min-w-fit items-center overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-7 shadow-[0_0_50px_rgba(239,68,68,0.5)]">
          {/* SHINE EFFECT */}

          <div className="absolute inset-0 -translate-x-full animate-[shine_3s_linear_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* LIVE DOT */}
{/* 
          <div className="relative mr-4 flex items-center justify-center">
            <span className="absolute h-4 w-4 animate-ping rounded-full bg-white" />

            <span className="relative h-4 w-4 rounded-full bg-white" />
          </div> */}

          {/* ICON */}

          <div className="mr-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl animate-pulse">
            <Flame className="size-5 text-white " />
          </div>

          {/* TEXT */}

          <div>
            <h2 className="text-lg font-black uppercase tracking-[0.25em] text-white">
              Breaking
            </h2>

            <p className="text-[10px] uppercase tracking-[0.4em] text-red-100">
              Live Updates
            </p>
          </div>
        </div>

        {/* MARQUEE */}

        <div className="flex-1 bg-[#020617]/70 backdrop-blur-3xl">
          <Marquee speed={90} gradient={false} pauseOnHover={true}>
            <div className="flex items-center py-2">
              {breakingNewsData.map((news) => (
                <div
                  key={news.id}
                  className="group mx-6 flex items-center gap-4 rounded-full border border-white/5 bg-white/[0.03] px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/20 hover:bg-cyan-500/5"
                >
                  {/* ICON */}

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <div className="absolute inset-0 rounded-full border border-cyan-400/20" />

                    <TrendingUp className="size-4 text-cyan-400" />
                  </div>

                  {/* NEWS */}

                  <p className="text-sm font-semibold tracking-wide text-gray-200 transition-colors duration-300 group-hover:text-cyan-400 md:text-base">
                    {news.title}
                  </p>

                  {/* LIVE */}

                  <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400">
                      Live
                    </span>
                  </div>

                  {/* DIVIDER */}

                  <div className="flex items-center gap-2 text-gray-600">
                    <Sparkles className="size-4" />

                    <Globe className="size-4" />
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;
