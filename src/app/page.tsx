"use client";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import ExperienceSection from "@/components/sections/Experience";
import Header from "@/components/sections/Header";
import ProjectsSection from "@/components/sections/Projects";
import ServicesSection from "@/components/sections/Services";
import SkillsTable from "@/components/sections/Skills";
import { getSectionData } from "@/lib/api";
import { Contact } from "@/types/personal";
import React, { useEffect } from "react";
import { useState } from "react";
export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");
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
  const [iconMap, setIconMap] = useState({
    skills: [{ name: "", icon: "", color: "" }],
    contact: [{ name: "", icon: "", color: "" }],
  });
  const [skillsData, setSkillsData] = useState({
    categories: {
      frontend: {
        skills: [{ name: "", icon: "", level: "", color: "" }],
      },
      backend: {
        skills: [{ name: "", icon: "", level: "", color: "" }],
      },
      cloud: {
        skills: [{ name: "", icon: "", level: "", color: "" }],
      },
    },
  });
  const [workType, setWorkType] = useState("");

  const handleIcons = async () => {
    const [iconData, skills] = await Promise.all([
      getSectionData("iconMap"),
      getSectionData("skills"),
    ]);
    setIconMap(iconData);
    setSkillsData(skills);
  };
  useEffect(() => {
    handleIcons();
  }, []);
  return (
    <div>
      <Header
        setActiveTab={setActiveTab}
        profileImage="/profilePhoto.jpg"
        name="Aishwarya B R"
      />
      <AboutSection
        setContactInfo={setContactInfo}
        iconMap={iconMap.skills}
        skillsData={skillsData}
      />
      <ExperienceSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={[
          {
            id: "projects",
            label: "Stuff I Built",
            content: <ProjectsSection iconMap={iconMap.skills} />,
          },
          {
            id: "services",
            label: "Rent-a-Dev",
            content: (
              <ServicesSection
                setActiveTab={setActiveTab}
                setWorkType={setWorkType}
              />
            ),
          },
          {
            id: "skills",
            label: "Dev Arsenal",
            content: (
              <SkillsTable iconMap={iconMap.skills} skillsData={skillsData} />
            ),
          },
          {
            id: "contact",
            label: "Find Me Here",
            content: (
              <ContactSection
                contactInfo={contactInfo}
                iconMap={iconMap.contact}
                workType={workType}
              />
            ),
          },

          /*{
          id:'architecture-diagrams',
          label: "Architecture Autopsy",
          content: <div>Architecture Autopsy</div>
        },
        {
          id:'git',
          label: "Commit-ment Issues",
          content: <div>Git Contributions</div>
        },
        {
          id:'demo',
          label: "It works (on my machine)",
          content: <div>Live Demo</div>
        },
          {
            id: "blogs",
            label: "Rant Journal",
            content: (
              <div>
                <ul>
                  <li>How to leverage AI for techies to do non tech work</li>

                  <li>Importance of personal branding</li>

                  <li>Designing a chat microservice, minimal, ongoiing</li>

                  <li>The beauty of mono repo multi app setup</li>

                  <li>micro frontend</li>

                  <li>ai here, ai there</li>

                  <li>ai tools for techies, the ones i use</li>

                  <li>the 3 mr problem</li>

                  <li>jira workflow</li>
                </ul>
              </div>
            ),
          },*/
        ]}
        defaultActiveTab="projects"
        className="mt-10"
      />
    </div>
  );
}
