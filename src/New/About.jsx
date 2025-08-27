import React, { useState } from "react";

const ElevatePage = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [isLoading, setIsLoading] = useState(false);

  const yearData = {
    "2024": {
      videoId: "dQw4w9WgXcQ",
      title: "Elevate 2024 | Official Aftermovie",
      description:
        "Elevate - The Annual Innovation Summit Of IIT Kanpur Is One Of The Largest And Most Anticipated Events Throughout Asia...",
      stats: {
        corporates: "200+",
        govtOrgs: "80+",
        colleges: "450+",
        events: "100+",
        footfall: "180K+",
        eyeballs: "40M+",
      },
    },
    "2023": {
      videoId: "dQw4w9WgXcQ",
      title: "Elevate 2023 | Innovation Unleashed",
      description: "The second edition of Elevate brought together minds from across the globe...",
      stats: {
        corporates: "150+",
        govtOrgs: "60+",
        colleges: "350+",
        events: "75+",
        footfall: "140K+",
        eyeballs: "30M+",
      },
    },
    "2022": {
      videoId: "dQw4w9WgXcQ",
      title: "Elevate 2022 | The Beginning",
      description:
        "The inaugural Elevate summit that started it all. With Ashneer Grover as our headline speaker...",
      stats: {
        corporates: "100+",
        govtOrgs: "40+",
        colleges: "250+",
        events: "50+",
        footfall: "100K+",
        eyeballs: "20M+",
      },
    },
  };

  const years = ["2022", "2023", "2024"];

  const handleYearChange = (year) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedYear(year);
      setIsLoading(false);
    }, 300);
  };

  const currentData = yearData[selectedYear];

  return (
    <div className="min-h-screen text-white font-sans relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#0c5352]/20 rotate-45 animate-pulse"></div>
        <div
          className="absolute bottom-32 right-16 w-24 h-24 border border-[#0c7372]/30 rounded-full animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-transparent rotate-12 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#0c5352]/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#0c7372]/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(12, 83, 82, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(12, 83, 82, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 py-16">
     

        {/* Aftermovies Section */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Video & Year Selector */}
            <div className="space-y-10">
              <div className="text-center lg:text-left">
                <h2 className="text-5xl font-black bg-gradient-to-r from-[#ffffff] via-[#0c7372] to-[#0c5352] bg-clip-text text-transparent mb-8 tracking-wider relative">
                  AFTERMOVIES
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearChange(year)}
                      className={`relative px-8 py-4 rounded-lg border-2 transition-all duration-500 font-bold text-lg overflow-hidden group ${
                        selectedYear === year
                          ? "bg-[#0c5352] border-[#0c7372] text-white shadow-lg shadow-[#0c7372]/50"
                          : "border-gray-700 text-gray-300 hover:border-[#0c7372] hover:text-[#0c7372] hover:shadow-lg hover:shadow-[#0c7372]/30"
                      }`}
                      disabled={isLoading}
                    >
                      <span className="relative z-10">{year}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Video Player */}
              <div
                className={`transition-all duration-700 ${
                  isLoading ? "opacity-30 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-[#0c5352]/20">
                  <div className="aspect-video relative">
                    {isLoading ? (
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-900 to-gray-800">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-[#0c7372] rounded-full animate-bounce"></div>
                          <div className="w-3 h-3 bg-[#0c9392] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-3 h-3 bg-[#0c5352] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        src={`https://www.youtube.com/embed/${currentData.videoId}`}
                        title={currentData.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentData.title}</h3>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <a
                    href={`https://youtube.com/watch?v=${currentData.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#0c7372] hover:text-[#0c9392] font-semibold text-lg"
                  >
                    Watch On YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Right: About & Stats */}
            <div className={`space-y-10 transition-all duration-700 ${isLoading ? "opacity-30 scale-95" : "opacity-100 scale-100"}`}>
              <div>
                <h2 className="text-5xl font-black bg-gradient-to-r from-[#ffffff] via-[#0c7372] to-[#0c5352] bg-clip-text text-transparent mb-10 text-center lg:text-left tracking-wider relative">
                  ABOUT ELEVATE
                </h2>
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-[#0c5352]/20">
                  <p className="text-gray-300 text-lg leading-relaxed">{currentData.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {Object.entries(currentData.stats).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-[#0c7372]/50 transition-all duration-500 group"
                  >
                    <div className="text-4xl font-black text-[#0c7372] mb-3">{value}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatePage;