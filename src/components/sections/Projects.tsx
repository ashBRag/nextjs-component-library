/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from 'react';
import Timeline from '@/components/ui/undertale/Timeline';
import { getSectionData } from '@/lib/api';
import Image from 'next/image';
import Card from '../ui/undertale/Card';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

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
    tech_stack:['']
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
            tech_stack: project.tech_stack
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
                    tech_stack: project.tech_stack
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
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
    );
  }

  const timelineItems = getTimelineItems();
  const skillComponent = (skill={icon:'', name: ''}) => {
    const IconComponent = SiIcons[skill.icon||''] || FaIcons[skill.icon||''];
    return (
        <li key={skill.name} className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-2">
          {IconComponent && <IconComponent className="w-10 h-10" color={skill.color}/>}
          <span className="text-lg sm:text-xs">{skill.name}</span>
          </div>
        </li>
      );
  }


  return (
    <section className="flex p-4">
        <Timeline items={timelineItems} className='w-120 mr-10' />
        <Card title={projectInfo.title} description={<div>
            <div className="grid grid-cols-6 gap-2 w-auto"> 
       {projectInfo?.tech_stack?.map(skill =>skillComponent({
        name: skill,
        icon: ''
       }))}
       </div>
            {projectInfo.description}
        </div>
        } size='lg'/>
    </section>
  );
}