/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from 'react';
import Timeline from '@/components/ui/Timeline';
import { getSectionData } from '@/lib/api';
import Image from 'next/image';
import Card from '../ui/Card';
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
  const [projectInfo, setProjectInfo] = useState({
    title: '',
    description: '',
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSectionData('projects');
        setProjectsData(data);
        const project = data.experience?.[0]?.projects?.[0] || {}
        setProjectInfo({
            title: project?.name||'',
            description:  project.achievements?.join('\n')||'',
        })
     
        
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
    const badgeText = exp.company.split(' ')[0]
        exp.projects?.forEach((project) => {
          allItems.push({
            id: `${exp.company.toLowerCase().replace(/\s+/g, '-')}-${project.name.toLowerCase().replace(/\s+/g, '-')}`,
            title: project.name,
            date: project.duration,
            //description: project.achievements.join(' • '),
            badge: {
              text: badgeText, // Use first word of company name
              variant
            },
            icon: <Image src={`/companyLogo/${badgeText.toLowerCase()}.png`}  alt='profilePhoto' className='w-10 h-10 rounded-full' width={10} height={10}/>,
            action:{
               onClick: ()=>{
                setProjectInfo({
                    title: project.name,
                    description:  project.achievements.join(' • '),
                })
               }
              
            }
          })
        });
    });


    return allItems;
  };


  if (loading) {
    return (
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  const timelineItems = getTimelineItems();

  return (
    <section className="flex py-16 bg-gray-50 dark:bg-gray-900">
        <Timeline items={timelineItems} className='w-80' />
        <Card title={projectInfo.title} description={projectInfo.description} />
    </section>
  );
}