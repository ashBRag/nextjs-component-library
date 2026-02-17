"use client";
import { scrollToElement } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface HeaderProps {
  profileImage: string;

  name?: string;
  className?: string;
}

const Header = ({
  profileImage = "/profilePhoto.jpg",

  name = "Elias",
  className = "",
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills", "services", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToElement(sectionId, 180);
  };

  const navItems = [
    { id: "about", label: "home" },
    { id: "projects", label: "projects" },
    { id: "skills", label: "skills" },
    { id: "services", label: "services" },
    { id: "contact", label: "connect" },
    { id: "blogs", label: "blogs" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 
        /95 backdrop-blur-md 
        border-b border-[#ABB2BF]/20 
        ${className}
      `}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Profile section - shows when scrolled */}
          {isScrolled && (
            <div className="hidden sm:flex items-center space-x-3">
              <Image
                src={profileImage}
                alt="Profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#C778DD]"
              />
              <span className="text-white  font-medium">{name}</span>
              <a
                href="/resume.pdf"
                download={`${name}_Resume.pdf`}
                className="ml-4 bg-transparent border border-[#C778DD] text-[#C778DD] hover:bg-[#C778DD] hover:text-white px-3 py-1 text-sm  transition-all duration-300"
              >
                Resume
              </a>
            </div>
          )}

          {/* Mobile profile section - always visible on mobile */}
          <div className="sm:hidden flex items-center space-x-3">
            <Image
              src={profileImage}
              alt="Profile"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover border-2 border-[#C778DD]"
            />
            <span className="text-white  font-medium text-sm">{name}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  text-base font-medium transition-colors duration-200
                  ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-[#ABB2BF] hover:text-white"
                  }
                `}
              >
                <span className="text-[#C778DD]">#</span>
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
