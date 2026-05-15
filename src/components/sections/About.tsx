/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

"use client";
import { useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";

import { getSectionData } from "@/lib/api";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { AnimatedSkillsGrid } from "../ui/dev/Rotation";
import { Button } from "../ui/components/button/Button";
import Card from "../ui/components/card/Card";

interface SkillsData {
  categories: {
    frontend: { skills: Array<{ name: string; level: string }> };
    backend: { skills: Array<{ name: string; level: string }> };
    cloud: { skills: Array<{ name: string; level: string }> };
  };
}
interface AboutSectionProps {
  setContactInfo: (contactInfo: any) => void;
  skillsData: SkillsData;
}

/*
- Fetches personal data from the API and updates the state.
- Displays a profile image and a typewriter effect that cycles through various descriptions.
- Shows an "About Me" card with the fetched personal data and a grid of skills.
- Provides a button to download the resume.   

  @param {AboutSectionProps} props - The props for the AboutSection component, including a function to set contact information and an array of skills data.
  @return {JSX.Element} The rendered AboutSection component.  
  @example
    <AboutSection
      setContactInfo={(contactInfo) => console.log(contactInfo)}
      skillsData={[{ name: "JavaScript", level: "Advanced" }, { name: "React", level: "Intermediate" }]}
    />    
  
*/

export default function AboutSection({
  setContactInfo,
  skillsData,
}: AboutSectionProps) {
  const [personalData, setPersonalData] = useState({
    name: "",
    about: "",
    profilePhoto: "",
  });

  const [loading, setLoading] = useState(true);
  // Animate group hook

  useEffect(() => {
    async function fetchData() {
      try {
        const personal = await getSectionData("personal");
        setPersonalData(personal);
        setContactInfo(personal.contact);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/Resume.pdf";
    a.download = "Resume.pdf";
    a.click();
  };

  return (
    <section className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
      <div
        className="hidden lg:flex lg:flex-col mr-10 slide-left"
        id="profile-image"
      >
        <Image
          src="/profilePhoto.png"
          alt="Profile Image"
          className="mb-10"
          width={304}
          height={304}
        />
        <Button iconAfter={<LuDownload />} onClick={handleDownload}>
          Download Resume
        </Button>
      </div>

      <Card
        id="about-me-card"
        title="Meet Aishwarya B R"
        titleClassName="text-[#C778DD]"
      >
        <div className="flex flex-col gap-2">
          <div className="flex">
            <span className="mr-2">I Am</span>
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Developer",
                  "A Freelancer",
                  "A Tech Consultant",
                  "A Mentor",
                  "Batman",
                  "A Tech Consultant",
                  "A Mentor",
                  "Groot!!",
                  "Free...........lancer",
                  "Your Father Luke!",
                  "A Mentor",
                  "A Tech Consultant",
                  "A Freelancer",
                  "A Full Stack Developer",
                  "Your Density, I Mean Destiny",
                ],

                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
              }}
            />
          </div>
          <p>{personalData?.about}</p>

          <AnimatedSkillsGrid skillsData={skillsData} />
        </div>
      </Card>
    </section>
  );
}
