"use client";

import { useState, useEffect } from "react";
import Timeline, { PortfolioTimelineItem } from "@/components/ui/dev/Timeline";
import { getSectionData } from "@/lib/api";
import Image from "next/image";
import Card from "../components/card/Card";
import { Experience, Project, Projects } from "@/types/projects";
import IconComponent from "../components/ui/Icon";
import MobileCarousel from "../components/ui/dev/Scroll";

const DEFAULT_PROJECT: Project = {
  name: "",
  duration: "",
  achievements: [],
  tech_stack: [],
};

const DEFAULT_EXPERIENCE: Experience = {
  position: "",
  company: "",
  location: "",
  duration: "",
  projects: [DEFAULT_PROJECT],
};

export default function ProjectsSection() {
  const [projectsData, setProjectsData] = useState<Projects>({
    experience: [DEFAULT_EXPERIENCE],
  });
  const [projectInfo, setProjectInfo] = useState<Project>({
    name: "",
    duration: "",
    achievements: [""],
    tech_stack: [""],
  });
  const [selectedTimelineItem, setSelectedTimelineItem] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSectionData("projects");
        setProjectsData(data);
        const project = data.experience?.[0]?.projects?.[0] || {};
        setProjectInfo(project);
      } catch (error) {
        console.error("Failed to fetch projects data:", error);
      }
    }

    fetchData();
  }, []);

  // Transform projects data into timeline format
  const getTimelineItems = () => {
    if (!projectsData) return [];

    const allItems: PortfolioTimelineItem[] = [];

    projectsData.experience.forEach((exp) => {
      const badgeText = exp.company.split(" ")[0];
      exp.projects?.forEach((project) => {
        allItems.push({
          id: `${exp.company.toLowerCase().replace(/\s+/g, "-")}-${project.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`,
          title: project.name,
          date: project.duration,
          badge: {
            text: badgeText,
          },
          icon: (
            <Image
              src={`/companyLogo/${badgeText.toLowerCase()}.png`}
              alt="profilePhoto"
              className="w-8 h-8 rounded-full"
              width={10}
              height={10}
            />
          ),
          action: {
            onClick: () => {
              setProjectInfo(project);
            },
          },
        });
      });
    });

    return allItems;
  };

  // Component for project card content
  const ProjectCard = ({
    project,
    company = "",
    duration = "",
  }: {
    project: Project;
    company?: string;
    duration?: string;
  }) => (
    <Card
      title={project?.name || ""}
      size="md"
      className="w-full md:min-h-[60vh]"
    >
      <div>
        {company && <div>Company: {company}</div>}
        <div>{duration}</div>
        <div className="my-5">Tech Stack Used </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 w-auto my-6">
          {project?.tech_stack?.map((skill) => (
            <IconComponent
              key={skill}
              section="skills"
              name={skill}
              iconClass="w-8 h-8 sm:w-8 sm:h-8"
            />
          ))}
        </div>
        <ul className="space-y-1">
          {project?.achievements.map((achievement, index) => (
            <li key={"ach" + index} className="text-sm sm:text-base">
              * {achievement}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );

  const timelineItems = getTimelineItems();

  return (
    <>
      {/* Desktop/Tablet Layout: Timeline + Project Details (md and above) */}
      <section className="hidden md:flex gap-6">
        <Timeline
          items={timelineItems}
          className="w-2/5 max-h-[65vh] overflow-y-auto pr-5 custom-scroll"
          onSelect={(id) => {
            setSelectedTimelineItem(id);
          }}
          selectedId={selectedTimelineItem}
        />
        <div className="w-3/5">
          <ProjectCard project={projectInfo} />
        </div>
      </section>

      {/* Mobile Layout: Carousel (sm and below) */}
      <section className="md:hidden">
        <MobileCarousel
          items={projectsData.experience?.flatMap((exp) =>
            exp.projects?.map((project) => ({
              id: project.name,
              content: (
                <ProjectCard
                  project={project}
                  company={exp.company}
                  duration={exp.duration}
                />
              ),
            }))
          )}
          className="p-5"
        />
      </section>
    </>
  );
}
