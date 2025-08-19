/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import { getSectionData } from "@/lib/api";

import Image from "../ui/undertale/Image";
import Typewriter from "typewriter-effect";
import Card from "../ui/undertale/Card";
import { AnimatedSkillsGrid } from "../ui/undertale/Rotation";
import { UndertaleDownloadButton } from "../ui/undertale/Button";
import UndertaleUI from "./Continue";

export default function AboutSection({ setContactInfo, iconMap, skillsData }) {
  const [personalData, setPersonalData] = useState({
    name: "",
    about: "",
    profilePhoto: "",
  });

  const [loading, setLoading] = useState(true);

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

  return (
    <section className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2 mt-[3vh] md:mt-[16vh] md:mb-[10vh] mx-[2.5vw]">
      <div className="hidden lg:flex lg:flex-col mr-10 pt-2">
        <Image src="/profilePhoto.jpg" alt="Profile Image" />
        <UndertaleDownloadButton
          href="/resume.pdf"
          downloadName="Aishwarya_BR_Resume.pdf"
        />
        <UndertaleUI />
      </div>

      <Card title="Meet Aishwarya B R" noBackground>
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
                  "Not Debugging, I Am The Bug",
                  "A Tech Consultant",
                  "A Mentor",
                  "Groot!!",
                  "Free...........lancer",
                  "Your Father Luke!",
                  "A Mentor",
                  "A Tech Consultant",
                  "A Freelancer",
                  "A Full Stack Developer",
                  "Who? - Yoda",
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
          <AnimatedSkillsGrid skillsData={skillsData} iconMap={iconMap} />
        </div>
      </Card>
    </section>
  );
}
