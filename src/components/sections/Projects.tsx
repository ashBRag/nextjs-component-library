/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from 'react';
import Timeline from '@/components/ui/Timeline';
import { getSectionData } from '@/lib/api';

interface Project {
  name: string;
  duration: string;
  tech_stack: string[];
  achievements: string[];
}

interface Experience {
  position: string;
  company: string;
  location: string;
  duration: string;
  leadership?: string[];
  projects?: Project[];
  tech_stack?: string[];
  achievements?: string[];
}

interface ProjectsData {
  experience: Experience[];
}
const variants = ['primary', 'success', 'warning', 'danger'] as const;


export default function ProjectsSection() {
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSectionData('projects');
        setProjectsData(data);
      } catch (error) {
        console.error('Failed to fetch projects data:', error);
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
    const allCompanies = Array.from(new Set(projectsData.experience.map(exp => exp.company)));
    const companyIndex = allCompanies.indexOf(exp.company);
    const variant = variants[companyIndex % variants.length];
      if (exp.projects) {
        exp.projects.forEach((project) => {
          allItems.push({
            id: `${exp.company.toLowerCase().replace(/\s+/g, '-')}-${project.name.toLowerCase().replace(/\s+/g, '-')}`,
            title: project.name,
            date: project.duration,
            //description: project.achievements.join(' • '),
            badge: {
              text: exp.company.split(' ')[0], // Use first word of company name
              variant
            },
          });
        });
      } else {
        // If no projects, add the experience itself
        allItems.push({
          id: exp.company.toLowerCase().replace(/\s+/g, '-'),
          title: `${exp.position} - ${exp.company}`,
          date: exp.duration,
          //description: exp.achievements?.join(' • ') || 'General development work',
          badge: {
            text: exp.company.split(' ')[0],
            variant
          },
        });
      }
    });

    return allItems;
  };


  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  const timelineItems = getTimelineItems();

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
    </section>
  );
}