// components/AtomicProfile.jsx
"use client";
import Image from "next/image";

export default function AtomicProfile({
  profileText = "ME",
  profileImage = null,
  bgColor = "from-blue-500 to-purple-600",
  icons = ["⚡", "🚀", "💎", "⭐", "🔥", "💫"],
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        {/* Orbit rings - only front half visible */}
        <div className="orbit-ring w-60 h-60"></div>
        <div className="orbit-ring w-80 h-80"></div>
        <div className="orbit-ring w-[400px] h-[400px]"></div>

        {/* Central profile block */}

        {profileImage ? (
          <Image
            src={profileImage}
            alt="Profile"
            className="object-cover rounded-xl"
            width={120}
            height={120}
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${bgColor} rounded-xl flex items-center justify-center text-white text-2xl font-bold`}
          >
            {profileText}
          </div>
        )}

        {/* Orbiting icons */}
        {/* Orbit 1 - Two icons */}
        <div className="orbit-container">
          <div className="orbit-path-1">
            <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white text-xs">
              {icons[0]}
            </div>
          </div>
        </div>

        <div className="orbit-container">
          <div className="orbit-path-1" style={{ animationDelay: "-3s" }}>
            <div className="w-8 h-8 bg-purple-500 rounded-full shadow-lg flex items-center justify-center text-white text-xs">
              {icons[1]}
            </div>
          </div>
        </div>

        {/* Orbit 2 - Single icon */}
        <div className="orbit-container">
          <div className="orbit-path-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full shadow-lg flex items-center justify-center text-white text-sm">
              {icons[2]}
            </div>
          </div>
        </div>

        {/* Orbit 3 - Three icons */}
        <div className="orbit-container">
          <div className="orbit-path-3">
            <div className="w-6 h-6 bg-yellow-500 rounded-full shadow-lg flex items-center justify-center text-white text-xs">
              {icons[3]}
            </div>
          </div>
        </div>

        <div className="orbit-container">
          <div className="orbit-path-3" style={{ animationDelay: "-3.33s" }}>
            <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg flex items-center justify-center text-white text-xs">
              {icons[4]}
            </div>
          </div>
        </div>

        <div className="orbit-container">
          <div className="orbit-path-3" style={{ animationDelay: "-6.67s" }}>
            <div className="w-6 h-6 bg-cyan-500 rounded-full shadow-lg flex items-center justify-center text-white text-xs">
              {icons[5]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
