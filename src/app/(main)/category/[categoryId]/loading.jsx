const Loading = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] py-10 px-4">
      {/* Top Breaking News Bar */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="h-14 w-full rounded-2xl bg-gradient-to-r from-red-200 via-red-100 to-red-200 animate-pulse"></div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px] bg-white shadow-xl border border-gray-200"
            >
              {/* Image Section */}
              <div className="relative">
                <div className="h-[320px] w-full bg-gray-300 animate-pulse"></div>

                {/* Live Badge */}
                <div className="absolute top-5 left-5 h-8 w-20 rounded-full bg-red-300 animate-pulse"></div>

                {/* Trending Badge */}
                <div className="absolute top-5 right-5 h-8 w-28 rounded-full bg-orange-300 animate-pulse"></div>

                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 space-y-3">
                  <div className="h-6 w-28 rounded-full bg-blue-300 animate-pulse"></div>

                  <div className="h-8 w-[260px] rounded-lg bg-gray-200 animate-pulse"></div>

                  <div className="h-8 w-[220px] rounded-lg bg-gray-200 animate-pulse"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Author */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse"></div>

                    <div className="space-y-2">
                      <div className="h-4 w-32 rounded bg-gray-300 animate-pulse"></div>

                      <div className="h-3 w-24 rounded bg-gray-200 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-300 animate-pulse"></div>

                    <div className="h-8 w-8 rounded-full bg-gray-300 animate-pulse"></div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <div className="h-4 w-full rounded bg-gray-200 animate-pulse"></div>

                  <div className="h-4 w-full rounded bg-gray-200 animate-pulse"></div>

                  <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse"></div>
                </div>

                {/* Footer */}
                <div className="mt-7 flex items-center justify-between border-t pt-5">
                  <div className="h-6 w-28 rounded bg-gray-300 animate-pulse"></div>

                  <div className="h-6 w-20 rounded bg-gray-300 animate-pulse"></div>
                </div>

                {/* Button */}
                <div className="mt-7 h-14 w-full rounded-2xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
              </div>

              {/* Bottom Gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-pulse"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Loading;
