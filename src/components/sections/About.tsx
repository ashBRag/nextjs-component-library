"use client"
import { useEffect, useState,  } from 'react';
import { getSectionData } from '@/lib/api';
import * as SiIcons from 'react-icons/si';




export default function AboutSection() {
  const [personalData, setPersonalData] = useState({name: '', bio: '', profilePhoto: ''});
  const [skillsData, setSkillsData] = useState({categories:{
    frontend:{
        skills: [{name:'', icon:'' }]
    },
    backend:{
        skills: [{name:'', icon:'' }]
    },
    cloud:{
        skills: [{name:'', icon:'' }]
    },
  }});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [personal, skills] = await Promise.all([
          getSectionData('personal'),
          getSectionData('skills')
        ]);
        setPersonalData(personal);
        setSkillsData(skills);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  const skillComponent = (skill={icon:'', name: ''}) => {
    const IconComponent = SiIcons[skill.icon||''];
    console.log(skill.icon)
    return (
        <li key={skill.name} className="flex items-center gap-2">
          {IconComponent && <IconComponent className="w-5 h-5" />}
          <span>{skill.name}</span>
          <span className="text-sm text-gray-500">({skill.level})</span>
        </li>
      );
  }

  return (
    <section>
        <img src='profilePhoto.jpg'/>
      <h2>{personalData?.name}</h2>
      <p>{personalData?.bio}</p>
      
      <p>Skills: 
      <ul> 
        {skillsData.categories.frontend.skills.map(skill =>skillComponent(skill))}
        {skillsData.categories.backend.skills.map(skill =>skillComponent(skill))}
        {skillsData.categories.cloud.skills.map(skill =>skillComponent(skill))}

        </ul>
      </p>
    </section>
  );
}