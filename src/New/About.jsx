import React, { useState } from "react";

const ElevatePage = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [isLoading, setIsLoading] = useState(false);

  const yearData = {
    "2025": {
      image: "https://hire4event.com/blogs/wp-content/uploads/2019/02/hire4event.com_-1.jpg",
      title: "Elevate 2025 | Elevate 2.0 - Bigger, Grander, Impactful",
      description: `
        ELEVATE 2.0 is set to be bigger, grander, and more impactful — a three-day national event blending culture, technology, innovation, and entertainment. From cultural programs, competitions, and live performances to startup showcases, panel discussions, and community presentations, it offers a one-of-a-kind platform for students, professionals, and communities across India. Special guests include Aman Gupta (Co-Founder, boAt) and Anand Kumar (Founder, Super 30), along with many more icons and innovators.
      `,
      stats: {
        Teams: "50+",
        Events: "20+",
        Speakers: "25+",
        Participants: "500+",
        StartUps: "10+",
        Departments: "25+",
      },
    },
    "2024": {
      image: "https://home.iitd.ac.in/public/storage/uploads/president-2_1662305561.jpg",
      title: "Elevate 2024 | Elevate 1.0 - The Beginning of a Revolution",
      description: `
        Elevate 1.0 marked the beginning of a new era of innovation and collaboration. With inspiring leaders like Ashneer Grover and industry pioneers, it brought together culture, startups, and impactful sessions — setting the legacy for all future editions of Elevate.
      `,
        stats: {
        Teams: "50+",
        Events: "15+",
        Speakers: "20+",
        Participants: "300+",
        StartUps: "07+",
        Departments: "25+",
      },
    },
  };

  const years = ["2024", "2025"];

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
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#20A97B]/20 rotate-45 animate-pulse"></div>
        <div
          className="absolute bottom-32 right-16 w-24 h-24 border border-[#20A97B]/30 rounded-full animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#20A97B]/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#20A97B]/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 py-16">
        {/* Aftermovies Section */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Left: Image & Year Selector */}
            <div className="space-y-10 flex flex-col">
              <div className="text-center lg:text-left">
                <h2 className="text-5xl font-black bg-[#20A97B] bg-clip-text text-transparent mb-8 tracking-wider">
                  ELEVATE'S YEAR
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearChange(year)}
                      className={`relative px-8 py-4 rounded-lg border-2 transition-all duration-500 font-bold text-lg ${
                        selectedYear === year
                          ? "bg-[#20A97B] border-[#20A97B] text-white shadow-lg shadow-[#20A97B]/50"
                          : "border-gray-700 text-gray-300 hover:border-[#20A97B] hover:text-[#20A97B] hover:shadow-lg hover:shadow-[#20A97B]/30"
                      }`}
                      disabled={isLoading}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Image Display */}
              <div
                className={`flex-grow transition-all duration-700 ${
                  isLoading
                    ? "opacity-30 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-[#20A97B]/20 h-full flex flex-col">
                  <div className="aspect-video relative flex-grow">
                    {isLoading ? (
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-900 to-gray-800">
                        <div className="w-6 h-6 border-4 border-t-transparent border-[#20A97B] rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      <img
                        src={currentData.image}
                        alt={currentData.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <h3 className="text-2xl font-bold text-white">
                      {currentData.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: About & Stats */}
            <div
              className={`space-y-10 flex flex-col ${
                isLoading ? "opacity-30 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="flex-grow flex flex-col">
                <h2 className="text-5xl font-black bg-[#20A97B] bg-clip-text text-transparent mb-10 text-center lg:text-left tracking-wider">
                  ABOUT ELEVATE
                </h2>
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-[#20A97B]/20 whitespace-pre-line flex-grow">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {currentData.description}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {Object.entries(currentData.stats).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-[#20A97B]/50 transition-all duration-500 group"
                  >
                    <div className="text-4xl font-black text-[#20A97B] mb-3">
                      {value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">
                      {key}
                    </div>
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
