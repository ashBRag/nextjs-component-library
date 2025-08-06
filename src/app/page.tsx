import AboutSection from '@/components/sections/About';
import ExperienceSection from '@/components/sections/Experience';
import ProjectsSection from '@/components/sections/Projects';
export default function Home() {
  return (
    <div className="p-4 m-4">

       <AboutSection/>
       <ExperienceSection tabs={[
        {
          id:'projects',
          label: "Projects",
          content: <ProjectsSection/>
        },
        {
          id:'services',
          label: "Services Provided",
          content: <div>Services Provided</div>
        },
        {
          id:'contact',
          label: "Contact Info",
          content: <div>Contact Info</div>
        },
        {
          id:'demo',
          label: "Live Demo",
          content: <div>Live Demo</div>
        },
        {
          id:'blogs',
          label: "Blogs",
          content: <div>Blogs</div>
        },
       ]} defaultActiveTab="projects" className="p-10 m-10 mx-auto"/>

    </div>
  );
}


