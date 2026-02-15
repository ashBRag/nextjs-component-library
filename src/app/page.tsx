"use client";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import Header from "@/components/ui/dev/Header";
import ProjectsSection from "@/components/sections/Projects";
import ServicesSection from "@/components/sections/Services";
import SkillsTable from "@/components/sections/Skills";
import { getSectionData } from "@/lib/api";
import { Contact } from "@/types/personal";
import React, { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Container from "@/components/ui/dev/Container";
import { fetchIconMap } from "@/components/store/reducer";
import { useAppDispatch } from "@/components/store/hooks";
import { ScreenCenterWrapper } from "@/components/ui/CenterWrapper";
import TabbedSection from "@/components/sections/Experience";
import { title } from "process";
import BlogsSection from "@/components/sections/Blogs";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [showLoader, setShowloader] = useState(true);
  const [contactInfo, setContactInfo] = useState<Contact>({
    gmail: "",
    location: "",
    timezone: "",
    preferredContact: "",
    availability: {
      calendar: "",
      meetingTypes: [""],
    },
    messaging: {
      phone: "",
      whatsapp: "",
      discord: "",
    },
    social: {
      linkedin: "",
      peerlist: "",
    },
    code: {
      github: "",
      gitlab: "",
      hackerrank: "",
      leetcode: "",
    },
  });

  const [workType, setWorkType] = useState("");
  const dispatch = useAppDispatch();
  const {
    data: iconMap,
    isLoading: iconLoading,
    error: iconError,
  } = useQuery({
    queryKey: ["iconMap"],
    queryFn: () => getSectionData("iconMap"),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  // Skills query
  const {
    data: skillsData,
    isLoading: skillsLoading,
    error: skillsError,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: () => getSectionData("skills"),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowloader(false);
    }, 3000);
    dispatch(fetchIconMap());
  }, []);

  if (iconLoading || skillsLoading || showLoader)
    return (
      <ScreenCenterWrapper>
        <div className="flex-col justify-items-center align-center text-center">
          {/* <CoffeeMachineLoader /> */}
          <div className="loader"></div>

          <div className="mt-15 text-purple-400 font-mono font-bold">
            Loading Profile....
          </div>
        </div>
      </ScreenCenterWrapper>
    );

  // Error state
  if (iconError || skillsError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Error loading data</div>
      </div>
    );
  }

  // Data validation - ensure both iconMap and skillsData exist
  if (!iconMap || !skillsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>No data available</div>
      </div>
    );
  }

  const sections = [
    {
      id: "about",
      label: "About Me",
      title: "",

      content: (
        <AboutSection
          setContactInfo={setContactInfo}
          iconMap={iconMap.skills}
          skillsData={skillsData}
        />
      ),
    },
    {
      id: "projects",
      label: "Stuff I Built",
      title: "Stuff I Built",

      content: <ProjectsSection iconMap={iconMap} />,
    },
    {
      id: "skills",
      label: "Dev Arsenal",
      title: "Dev Arsenal",

      content: <SkillsTable iconMap={iconMap} skillsData={skillsData} />,
    },
    {
      id: "services",
      label: "Rent A Dev",
      title: "Rent A Dev",

      content: (
        <ServicesSection
          setActiveTab={setActiveTab}
          setWorkType={setWorkType}
          iconMap={iconMap.services}
        />
      ),
    },
    {
      id: "contact",
      label: "Find Me Here",
      title: "Find Me Here",

      content: (
        <ContactSection
          contactInfo={contactInfo}
          iconMap={iconMap}
          workType={workType}
        />
      ),
    },
    {
      id: "blogs",
      label: "Rant Journal",
      title: "Rant Journal",

      content: <BlogsSection />,
    },
  ];

  return (
    <div>
      <Header profileImage="/profilePhoto.jpg" name="Aishwarya B R" />

      {/* <ExperienceSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={[
          {
            id: "about",
            label: "About Me",
            content: (
              <AboutSection
                iconMap={iconMap.skills}
                setContactInfo={setContactInfo}
                skillsData={skillsData}
              />
            ),
            className: "sm:hidden",
          },
          {
            id: "projects",
            label: "Stuff I Built",
            content: <ProjectsSection iconMap={iconMap} />,
          },
        

          // {
          //   id:'architecture-diagrams',
          //   label: "Architecture Autopsy",
          //   content: <div>Architecture Autopsy</div>
          // },
          // {
          //   id:'git',
          //   label: "Commit-ment Issues",
          //   content: <div>Git Contributions</div>
          // },
          // {
          //   id:'demo',
          //   label: "It works (on my machine)",
          //   content: <div>Live Demo</div>
          // },
          //   {
          //     id: "blogs",
          //     label: "Rant Journal",
          //     content: (
          //       <div>
          //         <ul>
          //           <li>How to leverage AI for techies to do non tech work</li>

          //           <li>Importance of personal branding</li>

          //           <li>Designing a chat microservice, minimal, ongoiing</li>

          //           <li>The beauty of mono repo multi app setup</li>

          //           <li>micro frontend</li>

          //           <li>ai here, ai there</li>

          //           <li>ai tools for techies, the ones i use</li>

          //           <li>the 3 mr problem</li>

          //           <li>jira workflow</li>
          //         </ul>
          //       </div>
          //     ),
          //   },
        ]}
        defaultActiveTab="projects"
        className="mt-[10vh] md:mt-[2vh] lg:mt-[2vh]"
      /> */}
      <div className="hidden md:block">
        {sections.map((section) => (
          <Container key={"section-" + section.id} title={section.title}>
            {section.content}
          </Container>
        ))}
      </div>
      <TabbedSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={sections}
        defaultActiveTab="about"
        className="block md:hidden mt-[4vh]"
      />
    </div>
  );
}
