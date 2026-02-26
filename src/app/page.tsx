// "use client";
// import AboutSection from "@/components/sections/About";
// import ContactSection from "@/components/sections/Contact";
// import Header from "@/components/ui/dev/Header";
// import ProjectsSection from "@/components/sections/Projects";
// import ServicesSection from "@/components/sections/Services";
// import SkillsTable from "@/components/sections/Skills";
// import { getSectionData } from "@/lib/api";
// import { Contact } from "@/types/personal";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import Container from "@/components/ui/dev/Container";
// import { fetchIconMap } from "@/components/store/reducer";
// import { useAppDispatch } from "@/components/store/hooks";
// import { ScreenCenterWrapper } from "@/components/ui/CenterWrapper";
// import TabbedSection from "@/components/sections/Experience";
// import BlogsSection from "@/components/sections/Blogs";
// import FloatingCubes from "@/components/ui/dev/Background";

// export default function Home() {
//   const [activeTab, setActiveTab] = useState("about");
//   const [showLoader, setShowloader] = useState(true);
//   const [contactInfo, setContactInfo] = useState<Contact>({
//     location: "",
//     timezone: "",
//     preferredContact: "",
//     messaging: [{ id: "", url: "" }],
//     social: [{ id: "", url: "" }],
//     code: [{ id: "", url: "" }],
//     blog: [{ id: "", url: "" }],
//   });

//   const dispatch = useAppDispatch();

//   // Skills query
//   const {
//     data: skillsData,
//     isLoading: skillsLoading,
//     error: skillsError,
//   } = useQuery({
//     queryKey: ["skills"],
//     queryFn: () => getSectionData("skills"),
//     staleTime: 5 * 60 * 1000,
//     gcTime: 10 * 60 * 1000,
//   });

//   useEffect(() => {
//     setTimeout(() => {
//       setShowloader(false);
//     }, 3000);
//     dispatch(fetchIconMap());
//   }, []);

//   if (skillsLoading || showLoader)
//     return (
//       <ScreenCenterWrapper>
//         <div className="flex-col justify-items-center align-center text-center">
//           {/* <CoffeeMachineLoader /> */}
//           <div className="loader"></div>

//           <div className="mt-15 text-purple-400  font-bold">
//             Loading Profile....
//           </div>
//         </div>
//       </ScreenCenterWrapper>
//     );

//   // Error state
//   if (skillsError) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div>Error loading data</div>
//       </div>
//     );
//   }

//   // Data validation - ensure both iconMap and skillsData exist
//   if (!skillsData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div>No data available</div>
//       </div>
//     );
//   }

//   const sections = [
//     {
//       id: "about",
//       label: "home",
//       // title: "About Me",
//       content: (
//         <AboutSection setContactInfo={setContactInfo} skillsData={skillsData} />
//       ),
//     },
//     {
//       id: "projects",
//       label: "projects",
//       title: "Stuff I Built",
//       content: <ProjectsSection />,
//     },
//     {
//       id: "skills",
//       label: "skills",
//       title: "Dev Arsenal",
//       content: <SkillsTable skillsData={skillsData} />,
//     },
//     {
//       id: "services",
//       label: "services",
//       title: "Rent A Dev",
//       content: <ServicesSection />,
//     },
//     {
//       id: "contact",
//       label: "connect",
//       title: "Find Me Here",

//       content: <ContactSection id="contact" contactInfo={contactInfo} />,
//     },
//     {
//       id: "blogs",
//       label: "blogs",
//       title: "Rant Journal",
//       content: <BlogsSection />,
//     },
//   ];

//   return (
//     <div>
//       <FloatingCubes />

//       <Header
//         profileImage="/profilePhoto.jpg"
//         name="Aishwarya B R"
//         navItems={sections.map(({ id, label }) => ({ id, label }))}
//       />

//       {/*

//           // {
//           //   id:'architecture-diagrams',
//           //   label: "Architecture Autopsy",
//           //   content: <div>Architecture Autopsy</div>
//           // },
//           // {
//           //   id:'git',
//           //   label: "Commit-ment Issues",
//           //   content: <div>Git Contributions</div>
//           // },
//           // {
//           //   id:'demo',
//           //   label: "It works (on my machine)",
//           //   content: <div>Live Demo</div>
//           // },
//           //   {
//           //     id: "blogs",
//           //     label: "Rant Journal",
//           //     content: (
//           //       <div>
//           //         <ul>
//           //           <li>How to leverage AI for techies to do non tech work</li>

//           //           <li>Importance of personal branding</li>

//           //           <li>Designing a chat microservice, minimal, ongoiing</li>

//           //           <li>The beauty of mono repo multi app setup</li>

//           //           <li>micro frontend</li>

//           //           <li>ai here, ai there</li>

//           //           <li>ai tools for techies, the ones i use</li>

//           //           <li>the 3 mr problem</li>

//           //           <li>jira workflow</li>
//           //         </ul>
//           //       </div>
//           //     ),
//           //   },

//       /> */}
//       <div className="hidden md:block">
//         {sections.map((section) => (
//           <Container
//             key={"section-" + section.id}
//             id={"section-" + section.id}
//             title={section.title}
//           >
//             {section.content}
//           </Container>
//         ))}
//       </div>
//       <TabbedSection
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         tabs={sections}
//         defaultActiveTab="about"
//         className="block md:hidden mt-[4vh]"
//       />
//     </div>
//   );
// }

"use client";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import Header from "@/components/ui/dev/Header";
import ProjectsSection from "@/components/sections/Projects";
import ServicesSection from "@/components/sections/Services";
import SkillsTable from "@/components/sections/Skills";
import { getSectionData } from "@/lib/api";
import { Contact } from "@/types/personal";
import React, { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "@/components/ui/dev/Container";
import { fetchIconMap } from "@/components/store/reducer";
import { useAppDispatch, useAppSelector } from "@/components/store/hooks";
import { ScreenCenterWrapper } from "@/components/ui/CenterWrapper";
import TabbedSection from "@/components/sections/Experience";
import BlogsSection from "@/components/sections/Blogs";
import FloatingCubes from "@/components/ui/dev/Background";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [showLoader, setShowloader] = useState(true);
  const [contactInfo, setContactInfo] = useState<Contact>({
    location: "",
    timezone: "",
    preferredContact: "",
    messaging: [{ id: "", url: "" }],
    social: [{ id: "", url: "" }],
    code: [{ id: "", url: "" }],
    blog: [{ id: "", url: "" }],
  });

  const dispatch = useAppDispatch();
  const iconMapStatus = useAppSelector(
    (state) => state.portfolio.iconMapStatus
  );

  const {
    data: skillsData,
    isLoading: skillsLoading,
    error: skillsError,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: () => getSectionData("skills"),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    setTimeout(() => setShowloader(false), 3000);
    dispatch(fetchIconMap()); // only fetch if not already fetched
  }, []);

  const isLoading = skillsLoading || iconMapStatus === "loading" || showLoader;

  if (isLoading)
    return (
      <ScreenCenterWrapper>
        <div className="flex-col justify-items-center align-center text-center">
          <div className="loader"></div>
          <div className="mt-15 text-purple-400 font-bold">
            Loading Profile....
          </div>
        </div>
      </ScreenCenterWrapper>
    );

  if (!skillsData)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>No data available</div>
      </div>
    );

  const sections = [
    {
      id: "about",
      label: "home",
      content: (
        <AboutSection setContactInfo={setContactInfo} skillsData={skillsData} />
      ),
    },
    {
      id: "projects",
      label: "projects",
      title: "Stuff I Built",
      content: <ProjectsSection />,
    },
    {
      id: "skills",
      label: "skills",
      title: "Dev Arsenal",
      content: <SkillsTable skillsData={skillsData} />,
    },
    {
      id: "services",
      label: "services",
      title: "Rent A Dev",
      content: <ServicesSection />,
    },
    {
      id: "contact",
      label: "connect",
      title: "Find Me Here",
      content: <ContactSection id="contact" contactInfo={contactInfo} />,
    },
    {
      id: "blogs",
      label: "blogs",
      title: "Rant Journal",
      content: <BlogsSection />,
    },
  ];

  return (
    <div>
      <FloatingCubes />
      <Header
        profileImage="/profilePhoto.jpg"
        name="Aishwarya B R"
        navItems={sections.map(({ id, label }) => ({ id, label }))}
      />
      <div className="hidden md:block">
        {sections.map((section) => (
          <Container
            key={"section-" + section.id}
            id={"section-" + section.id}
            title={section.title}
          >
            {section.content}
          </Container>
        ))}
      </div>
      <TabbedSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={sections}
        defaultActiveTab="about"
        className="block md:hidden mt-[4vh]"
      />
    </div>
  );
}
