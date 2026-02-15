"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { scrollToBottom } from "@/lib/utils";

interface HeaderProps {
  profileImage: string;
  name: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({
  profileImage = "/profilePhoto.jpg",
  name = "Aishwarya B R",
  setActiveTab,
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      const sections = ["services", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = (id = "") => {
    scrollToBottom(2.5);
    setActiveTab(id);
  };

  const navItems = [
    { id: "services", label: "Services" },
    { id: "contact", label: "Connect" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900/95 backdrop-blur-md border-b-4 border-gray-500`}
    >
      <nav className="mx-10 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Profile section or empty space */}
          <div className="flex">mee</div>

          <div className={`md:hidden flex items-center space-x-3`}>
            <Image
              src={profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
              width={10}
              height={10}
            />
            <span className="text-yellow-400 font-mono font-bold">{name}</span>
            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Aishwarya_BR_Resume.pdf"
              className="ml-4 bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 text-sm font-mono border border-white/50 hover:border-white transition-all"
            >
              📄 Resumeee
            </a>
          </div>

          {/* Desktop Navigation - ALWAYS visible on the right */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenu(item.id)}
                className={`px-4 py-2 font-mono font-bold uppercase tracking-wider transition-all duration-200 border-2 ${
                  activeSection === item.id
                    ? "bg-yellow-500 text-black border-white"
                    : "bg-transparent text-yellow-500 border-white/50 hover:bg-yellow-500 hover:text-black hover:border-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
