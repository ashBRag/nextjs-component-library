/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from 'react';

interface Skill {
  icon: string;
  name: string;
  color?: string;
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
  SiIcons: any;
  FaIcons:any;
  className?: string;
  orbitSpeed?: 'slow' | 'normal' | 'fast';
  direction?: 'clockwise' | 'counterclockwise';
}

export function AnimatedSkillsGrid({ 
  skillsData, 
  SiIcons, 
  FaIcons, 
  className = "" 
}: Omit<AnimatedSkillsProps, 'orbitSpeed' | 'direction'>) {
  
  const allSkills = [
    ...skillsData.categories.frontend.skills,
    ...skillsData.categories.backend.skills,
    ...skillsData.categories.cloud.skills
  ];

  const skillComponent = (skill: Skill, index: number) => {
    const IconComponent = SiIcons[skill.icon || ''] || FaIcons[skill.icon || ''];
    
    return (
      <li 
        key={`${skill.name}-${index}`} 
        className="flex flex-col items-center gap-1 group"
        style={{
          animation: `float 3s ease-in-out infinite ${index * 0.2}s`
        }}
      >
        <div className="flex flex-col items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20  transition-all duration-300">
          {IconComponent && (
            <IconComponent 
              className="w-8 h-8 drop-shadow-lg transition-transform duration-300 w-10" 
              color={skill.color || '#ffffff'}
            />
          )}
          <span className="text-sm font-medium text-white text-center">
            {skill.name}
          </span>
        </div>
      </li>
    );
  };

  return (
    <div className={className}>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
        {allSkills.map((skill, index) => skillComponent(skill, index))}
      </ul>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
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

