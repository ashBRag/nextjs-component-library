import StackIcon from 'tech-stack-icons';
import resumeData from './data/resume.json'
import promptsData from './data/prompts.json'
export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

        {resumeData.skills.map((skill)=><div key={skill}><StackIcon key={skill} name={skill.toLowerCase()} /> {skill}</div>)}
        
        {promptsData.prompts.map(prompt=><h1 key={prompt.id}>
            {prompt.question}
        </h1>)}

    </div>
  );
}


