export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">Next.js Project</h1>
        
        <p className="mb-6">
            This is a <a href="https://nextjs.org" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Next.js</a> project bootstrapped with 
            <a href="https://nextjs.org/docs/app/api-reference/cli/create-next-app" target="_blank" className="font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">create-next-app</a>.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
        
        <p className="mb-4">First, run the development server:</p>
        
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">npm run dev</pre>
        
        <p className="mb-4">
            Open <a href="http://localhost:3000" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">http://localhost:3000</a> with your browser to see the result.
        </p>
        
        <p className="mb-4">
            You can start editing the page by modifying <span className="font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">app/page.tsx</span>. 
            The page auto-updates as you edit the file.
        </p>
        
        <p className="mb-6">
            This project uses <a href="https://nextjs.org/docs/app/building-your-application/optimizing/fonts" target="_blank" className="font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">next/font</a> to optimize and load fonts.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Learn More</h2>
        
        <p className="mb-4">To learn more about Next.js, take a look at the following resources:</p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
                <a href="https://nextjs.org/docs" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Next.js Documentation</a> - learn about Next.js features and API.
            </li>
            <li>
                <a href="https://nextjs.org/learn" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Learn Next.js</a> - an interactive Next.js tutorial.
            </li>
        </ul>
    </div>
  );
}


