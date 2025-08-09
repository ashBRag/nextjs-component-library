/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Timeline from "@/components/ui/undertale/Timeline";
import { getSectionData } from "@/lib/api";
import Image from "next/image";
import Card from "../ui/undertale/Card";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { Project, Projects } from "@/types/projects";

const variants = ["primary", "success", "warning", "danger"] as const;

export default function ProjectsSection({ iconMap }) {
  const [projectsData, setProjectsData] = useState<Projects | null>(null);
  const [loading, setLoading] = useState(true);
  const [projectInfo, setProjectInfo] = useState<Project | null>({
    name: "",
    duration: "",
    achievements: [""],
    tech_stack: [""],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSectionData("projects");
        setProjectsData(data);
        const project = data.experience?.[0]?.projects?.[0] || {};
        setProjectInfo(project);
      } catch (error) {
        console.error("Failed to fetch projects data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Transform projects data into timeline format
  const getTimelineItems = () => {
    if (!projectsData) return [];

    const allItems: any[] = [];

    projectsData.experience.forEach((exp) => {
      const allCompanies = Array.from(
        new Set(projectsData.experience.map((exp) => exp.company)),
      );
      const companyIndex = allCompanies.indexOf(exp.company);
      const variant = variants[companyIndex % variants.length];
      const badgeText = exp.company.split(" ")[0];
      exp.projects?.forEach((project) => {
        allItems.push({
          id: `${exp.company.toLowerCase().replace(/\s+/g, "-")}-${project.name.toLowerCase().replace(/\s+/g, "-")}`,
          title: project.name,
          date: project.duration,
          //description: project.achievements.join(' • '),
          badge: {
            text: badgeText, // Use first word of company name
            variant,
          },
          icon: (
            <Image
              src={`/companyLogo/${badgeText.toLowerCase()}.png`}
              alt="profilePhoto"
              className="w-10 h-10 rounded-full"
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const timelineItems = getTimelineItems();
  const skillComponent = (skill = { name: "" }) => {
    const iconConfig = iconMap.find((icon) => icon.name === skill.name) || {
      icon: "",
      color: "",
      name: "",
    };

    const IconComponent =
      SiIcons[iconConfig.icon || ""] || FaIcons[iconConfig.icon || ""];
    return (
      <li key={skill.name} className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {IconComponent && (
            <IconComponent
              color={iconConfig.color || "#ffffff"}
              className="w-10 h-10"
            />
          )}
          <span className="text-lg sm:text-xs">{skill.name}</span>
        </div>
      </li>
    );
  };

  return (
    <section className="flex p-4">
      <Timeline
        items={timelineItems}
        className="w-2/5 mr-10 max-h-[65vh] overflow-y-auto pr-5
               custom-scroll"
      />
      <Card title={projectInfo?.name || ""} size="md" className="w-3/5">
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 w-auto my-10">
            {projectInfo?.tech_stack?.map((skill) =>
              skillComponent({
                name: skill,
              }),
            )}
          </div>
          <ul>
            {projectInfo?.achievements.map((achievement, index) => (
              <li key={"ach" + index}>* {achievement}</li>
            ))}
          </ul>
        </div>
      </Card>
    </section>
  );
}
