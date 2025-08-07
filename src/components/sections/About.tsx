/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { UndertaleDownloadButton } from '../ui/undertale/Button';
import UndertaleUI from './Continue';


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


  return (
    <section className="flex flex-row  gap-2 mt-40 mb-30 mx-10">
        <div className='flex flex-col mr-10 pt-2' >
        <Image src='/profilePhoto.jpg' alt='Profile Image'
       />
        <UndertaleDownloadButton
  href="/resume.pdf"
  variant="primary"
  size="sm"
  downloadName="Aishwarya_BR_Resume.pdf"
/>
<UndertaleUI/>


        </div>

        <Card
        title='Meet Aishwarya B R'
        description={ <div className="flex flex-col gap-2">
          <div className='flex'>
            <span className='mr-2'>I Am</span>
            <Typewriter 
            options={{
              strings: [
                'A Full Stack Developer', 
                'A Freelancer', 
                'A Tech Consultant', 
                'A Mentor', 
                'Batman', 
                'Not Debugging, I Am The Bug', 
                'A Tech Consultant', 
                'A Mentor', 
                'Groot', 
                'A Full Snack Developer', 
                'Your Worst Nightmare', 
                'Free...........lancer', 
                'Your Father Luke!', 
                'A Tech Consultant', 
                'Iron Man', 
                'A Freelancer', 
                'A Tech Consultant', 
                'Who? - Yoda', 
                'Your Density, I Mean Destiny'
              ],
              
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 100,
            }}
            />
            </div>
          <p>{personalData?.about}</p>

       <span className='mt-4 mb-4'>Nerd Scout Badges</span>
       <AnimatedSkillsGrid
  skillsData={skillsData}
  SiIcons={SiIcons}
  FaIcons={FaIcons}
/>
        </div>}
              
        />
       
      
   
    </section>
  );
}