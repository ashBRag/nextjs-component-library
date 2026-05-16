"use client";
import { ThemeSwitcher } from "@/sections/Header/ThemeSwitcher";
import { scrollToElement } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
interface NavItem {
  id: string;
  label: string;
}
interface HeaderProps {
  profileImage: string;
  name?: string;
  className?: string;
  navItems: NavItem[];
}

const Header = ({
  profileImage = "/profilePhoto.jpg",
  name = "Elias",
  className = "",
  navItems = [{ id: "", label: "" }],
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("section-about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const scrollToSection = "section-" + sectionId;
    setActiveSection(sectionId);
    scrollToElement(scrollToSection, 100);
  };

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
                  text-base font-medium transition-colors duration-200 cursor-pointer
                  ${
                    activeSection === item.id
                      ? "text-white font-extrabold"
                      : "text-[#ABB2BF] hover:text-white"
                  }
                `}
              >
                <span className="text-[#C778DD]">#</span>
                {item.label}
              </button>
            ))}
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
