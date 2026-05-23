const GlobalLoading = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* TOP LIVE BAR */}
      <div className="bg-red-700 text-white py-3 overflow-hidden shadow-lg">

        <div className="flex items-center gap-5">

          <div className="bg-black px-6 py-2 font-bold tracking-[3px] uppercase animate-pulse">
            Live
          </div>

          <marquee
            behavior="scroll"
            direction="left"
            className="font-medium text-sm md:text-base"
          >
            🌍 Breaking News • World Politics • Sports • Technology • Economy • Live Television Headlines • Global Updates
          </marquee>

        </div>
      </div>

      {/* MAIN */}
      <div className="w-11/12 mx-auto py-10">

        {/* TV HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">

          <div>

            <div className="h-5 w-40 bg-red-300 rounded animate-pulse mb-4"></div>

            <div className="h-14 w-80 bg-gray-300 rounded-lg animate-pulse"></div>

          </div>

          {/* LIVE INDICATOR */}
          <div className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full shadow-lg">

            <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>

            <span className="font-bold uppercase tracking-widest">
              Live Broadcast
            </span>

          </div>

        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {
            Array(6)
              .fill(0)
              .map((_, index) => (

                <div
                  key={index}
                  className="bg-white rounded-[30px] overflow-hidden shadow-2xl border border-gray-200"
                >

                  {/* IMAGE */}
                  <div className="relative">

                    <div className="h-[320px] bg-gray-300 animate-pulse"></div>

                    {/* TV LIVE */}
                    <div className="absolute top-5 left-5 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg">

                      <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>

                      <span className="text-sm font-bold uppercase">
                        Live
                      </span>

                    </div>

                    {/* BREAKING */}
                    <div className="absolute top-5 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg">

                      <span className="text-sm font-bold uppercase">
                        Breaking
                      </span>

                    </div>

                    {/* TEXT */}
                    <div className="absolute bottom-8 left-8 space-y-4">

                      <div className="h-6 w-32 rounded-full bg-red-300 animate-pulse"></div>

                      <div className="h-8 w-[280px] rounded-lg bg-gray-200 animate-pulse"></div>

                      <div className="h-8 w-[220px] rounded-lg bg-gray-200 animate-pulse"></div>

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-7">

                    {/* AUTHOR */}
                    <div className="flex items-center justify-between mb-7">

                      <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-full bg-gray-300 animate-pulse"></div>

                        <div className="space-y-3">

                          <div className="h-4 w-32 rounded bg-gray-300 animate-pulse"></div>

                          <div className="h-3 w-24 rounded bg-gray-200 animate-pulse"></div>

                        </div>

                      </div>

                      <div className="flex gap-3">

                        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>

                        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>

                      </div>

                    </div>

                    {/* DESCRIPTION */}
                    <div className="space-y-4">

                      <div className="h-4 w-full rounded bg-gray-200 animate-pulse"></div>

                      <div className="h-4 w-full rounded bg-gray-200 animate-pulse"></div>

                      <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse"></div>

                    </div>

                    {/* FOOTER */}
                    <div className="mt-8 flex items-center justify-between border-t pt-6">

                      <div className="h-6 w-28 rounded bg-yellow-200 animate-pulse"></div>

                      <div className="h-6 w-20 rounded bg-blue-200 animate-pulse"></div>

                    </div>

                    {/* BUTTON */}
                    <div className="mt-8 h-14 rounded-2xl bg-gradient-to-r from-red-300 via-gray-300 to-black animate-pulse"></div>

                  </div>

                  {/* TV BOTTOM BAR */}
                  <div className="h-2 bg-gradient-to-r from-red-600 via-black to-red-600"></div>

                </div>
              ))
          }

        </div>
      </div>
    </div>
  );
};

export default GlobalLoading;