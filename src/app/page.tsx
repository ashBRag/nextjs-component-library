import AboutSection from '@/components/sections/About';
import ExperienceSection from '@/components/sections/Experience';
import ProjectsSection from '@/components/sections/Projects';
import ServicesSection from '@/components/sections/Services';
export default function Home() {
  return (
    <div className="p-4 m-4">

       <AboutSection/>
       <ExperienceSection tabs={[
        {
          id:'projects',
          label: "Stuff I Built",
          content: <ProjectsSection/>
        },
        {
          id:'services',
          label: "Rent-a-Dev",
          content: <ServicesSection/>
        },
        {
          id:'contact',
          label: "Find Me Here",
          content: <div>Contact Info</div>
        },
        {
          id:'architecture-diagrams',
          label: "Architecture Autopsy",
          content: <div>Architecture Autopsy</div>
        },
        {
          id:'demo',
          label: "It works (on my machine)",
          content: <div>Live Demo</div>
        },
        {
          id:'blogs',
          label: "Rant Journal",
          content: <div>
            <ul>
              
              <li>How to leverage AI for techies to do non tech work</li>
              
              <li>Importance of personal branding</li>
              
              <li>Designing a chat microservice, minimal, ongoiing</li>
              
              <li>The beauty of mono repo multi app setup</li>
              
              <li>micro frontend</li>
              
              <li>ai here, ai there</li>
              
              <li>ai tools for techies, the ones i use</li>
              
              <li>the 3 mr problem</li>
              
              <li>jira workflow</li>
            </ul>

          </div>
        },
       ]} defaultActiveTab="projects" className="p-10 m-10 mx-auto"/>

    </div>
  );
}


