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
import CoffeeMachineLoader from "@/components/ui/Loader";
import TypewriterComponent from "typewriter-effect";
import Container from "@/components/ui/dev/Container"
import { useDispatch } from "react-redux";
import { fetchIconMap } from "@/components/store/reducer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");
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
  // const [iconMap, setIconMap] = useState({
  //   skills: [{ name: "", icon: "", color: "" }],
  //   contact: [{ name: "", icon: "", color: "" }],
  //   services: [{ name: "", icon: "", color: "" }],
  // });
  // const [skillsData, setSkillsData] = useState<Skills>({
  //   categories: {
  //     frontend: {
  //       name: "Frontend",
  //       skills: [{ name: "", icon: "", level: "", color: "", years: 0 }],
  //     },
  //     backend: {
  //       name: "Backend",
  //       skills: [{ name: "", icon: "", level: "", color: "", years: 0 }],
  //     },
  //     cloud: {
  //       name: "Cloud",
  //       skills: [{ name: "", icon: "", level: "", color: "", years: 0 }],
  //     },
  //   },
  // });
  const [workType, setWorkType] = useState("");
  const dispatch = useDispatch()
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
    }, 5000);
    dispatch(fetchIconMap())
    
  }, []);

  if (iconLoading || skillsLoading || showLoader)
    return (
  <div className="mt-[25vh] flex-col justify-center align-center text-center">
      <CoffeeMachineLoader
      />
          <div className="mt-5 text-purple-500 font-mono font-bold">
      <TypewriterComponent 
      options={{strings:["Brewing Aishwarya's Portfolio"], autoStart:true,
        delay:100, loop:true

      }}
      
      />
      </div>
      </div>
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

  return (
    <div>
      <Header
        profileImage="/profilePhoto.jpg"
        name="Aishwarya B R"
      />
      <section className="hidden sm:block">
        <AboutSection
          setContactInfo={setContactInfo}
          iconMap={iconMap.skills}
          skillsData={skillsData}
        />
      </section>
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
      <Container
      title="Stuff I Built"

      className="mt-[10vh] md:mt-[2vh] lg:mt-[2vh]"
      
      >
      <ProjectsSection iconMap={iconMap} />
      </Container>

<Container
title="Rent A Dev"

        className="mt-[10vh] md:mt-[2vh] lg:mt-[2vh]"
      >
        <ServicesSection
            setActiveTab={setActiveTab}
            setWorkType={setWorkType}
            iconMap={iconMap.services}
          />
      </Container>
<Container

   
        className="mt-[10vh] md:mt-[2vh] lg:mt-[2vh]"
        title="Dev Arsenal"
      >
        <SkillsTable iconMap={iconMap} skillsData={skillsData} />

      </Container>
<Container

   title="Find Me Here"
        className="mt-[10vh] md:mt-[2vh] lg:mt-[2vh]"
      >
         <ContactSection
            contactInfo={contactInfo}
            iconMap={iconMap}
            workType={workType}
          />
      </Container>
    </div>
  );
}
