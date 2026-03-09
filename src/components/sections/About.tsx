/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useEffect, useState } from "react";
import { getSectionData } from "@/lib/api";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Card from "../ui/dev/Card";
import { AnimatedSkillsGrid } from "../ui/dev/Rotation";
import { DownloadResumeButton } from "../ui/dev/Button";

export default function AboutSection({ setContactInfo, skillsData }) {
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
        <DownloadResumeButton
          href="/resume.pdf"
          downloadName="Aishwarya_BR_Resume.pdf"
        />
      </div>

      <Card
        id="about-me-card"
        title="Meet Aishwarya B R"
        className="slide-right"
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

          <span className="mt-4 mb-4">Nerd Scout Badges</span>
          <AnimatedSkillsGrid skillsData={skillsData} />
        </div>
      </Card>
    </section>
  );
}
