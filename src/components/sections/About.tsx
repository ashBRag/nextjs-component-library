"use client"
import { useEffect, useState,  } from 'react';
import { getSectionData } from '@/lib/api';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
import Image from '../ui/undertale/Image';
import Typewriter from 'typewriter-effect';
import Card from '../ui/undertale/Card';
import { AnimatedSkillsGrid } from '../ui/undertale/Rotation';


export default function AboutSection() {
  const [personalData, setPersonalData] = useState({name: '', about: '', profilePhoto: ''});
  const [skillsData, setSkillsData] = useState({categories:{
    frontend:{
        skills: [{name:'', icon:'', level:'', color:'' }]
    },
    backend:{
        skills: [{name:'', icon:'', level:'', color:'' }]
    },
    cloud:{
        skills: [{name:'', icon:'', level:'', color:'' }]
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

  const skillLevelComponent = (level='') => {
    const stars = Array(+level).fill(0);
    return (
      <span className="text-sm text-gray-500">
        <div className="flex items-center gap-1">
        {stars.map((star, index) => <FaStar className="w-5 h-5 text-yellow-500" key={index}/>)}
        </div>  
      </span>
    );
  }

  return (
    <>  
    <section className="flex flex-row  gap-2">

        <Image src='/profilePhoto.jpg' alt='profilePhoto' className='w-80 h-80 rounded-full' />
        <Card
        title='Meet Aishwarya B R'
        description={ <div className="flex flex-col gap-2">
            <Typewriter 
            options={{
              strings: ['Full Stack Developer', 'Freelancer', 'Tech Consultant', 'Mentor'],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 100,
            }}
            />
          <p>{personalData?.about}</p>
          {/*<ul className="grid grid-cols-9 gap-2"> 
       {skillsData.categories.frontend.skills.map(skill =>skillComponent(skill))}
       {skillsData.categories.backend.skills.map(skill =>skillComponent(skill))}
       {skillsData.categories.cloud.skills.map(skill =>skillComponent(skill))}

       </ul>*/}
       <AnimatedSkillsGrid
  skillsData={skillsData}
  SiIcons={SiIcons}
  FaIcons={FaIcons}
  orbitSpeed="normal"
  direction="clockwise"
/>
        </div>}
              
        />
       
      
   
    </section>
      
    </>
  );
}