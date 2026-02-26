/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import IconComponent from "../Icon";

interface Skill {
  name: string;
}

interface SkillsData {
  categories: {
    frontend: { skills: Skill[] };
    backend: { skills: Skill[] };
    cloud: { skills: Skill[] };
  };
}

interface AnimatedSkillsProps {
  skillsData: SkillsData;
  className?: string;
}

export function AnimatedSkillsGrid({
  skillsData,
  className = "",
}: AnimatedSkillsProps) {
  const allSkills = [
    ...skillsData.categories.frontend.skills,
    ...skillsData.categories.backend.skills,
    ...skillsData.categories.cloud.skills,
  ];

  return (
    <div className={className}>
      <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {allSkills.map((skill, index) => (
          <li
            key={`${skill.name}-${index}`}
            className="flex flex-col items-center gap-1 group"
            style={{
              animation: `float 3s ease-in-out infinite ${index * 0.2}s`,
            }}
          >
            <IconComponent
              section="skills"
              name={skill.name}
              iconClass="w-8 h-8 drop-shadow-lg transition-transform duration-300 w-10"
              divClass="flex flex-col items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20  transition-all duration-300"
            />
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(2deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
}
