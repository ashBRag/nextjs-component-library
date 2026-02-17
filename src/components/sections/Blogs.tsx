"use client";
import { useEffect, useState } from "react";
import { getSectionData } from "@/lib/api";
import VerticalTabs from "../ui/dev/VerticalTabs";
import Card from "../ui/dev/Card";
// import { capitalizeFirstLetter } from "@/lib/utils";
// import MobileCarousel from "../ui/undertale/Scroll";
import { Blog, BlogTypes } from "@/types/blogs";
// import IconComponent from "../ui/Icon";
import { IconConfig } from "@/types/iconMap";
import Image from "next/image";

interface BlogSectionProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setWorkType: React.Dispatch<React.SetStateAction<string>>;
  iconMap: IconConfig[];
}

export default function BlogsSection() {
  const [blogsOptions, setBlogsOptions] = useState<Blog[]>([
    {
      source: "",
      type: "",
      title: "",
      url: "",
      description: "",
      image: "",
      createdAt: new Date(),
      tags: [""],
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [blogTypesOptions, setBlogTypesOptions] = useState<BlogTypes[]>([
    {
      type: "",
      label: "",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSectionData("blogs");
        setBlogsOptions(data.blogs);
        setBlogTypesOptions(data.types);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* Desktop/Tablet Layout: Timeline + Project Details (md and above) */}
      {/* <section className="hidden md:flex gap-6" id="blogs">
        <VerticalTabs
          tabs={blogTypesOptions.map((type, index) => {
            return {
              id: "blog" + index,
              name: type.label,
              content: (
                <div className="flex flex-row">
                  {blogsOptions
                    .filter((blog) => blog.type === type.type)
                    .map((blog) => (
                      <Card
                        title={blog.title}
                        description={blog.description}
                        className="w-1/2"
                        key={blog.title}
                      >
                        <Image
                          src={blog.image}
                          alt="Profile"
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover border-2 border-[#C778DD]"
                        />
                      </Card>
                    ))}
                </div>
              ),
            };
          })}
        />
      </section> */}

      {/* Mobile Layout: Carousel (sm and below) */}
      {/* <section className="md:hidden">
        <MobileCarousel
          items={blogsOptions.map((blog) => ({
            id: blog.id,
            content: (
              <Card title={blog.name} description={blog.description}>
                <div className="flex flex-col md:flex-row lg:flex-row">
                  <ul>
                    {blog.features.map((feature, index) => (
                      <li
                        className="flex items-center py-2 rounded"
                        key={blog.id + index}
                      >
                        <IconComponent
                          id={feature.iconId}
                          iconMap={iconMap}
                          iconClass="w-5 h-5 mr-2"
                          divClass="flex"
                          show={false}
                        />

                        <div className="text-[#C778DD]">{feature.text}</div>
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-5 h-fit">
                    <div className="relative p-5  border border-[#ABB2BF]/30">
                      <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-[#ABB2BF] opacity-30"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-[#ABB2BF] opacity-30"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-[#ABB2BF] opacity-30"></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-[#ABB2BF] opacity-30"></div>

                      <p
                        className="flex flex-col items-center gap-2 p-3 bg-[#C778DD]/10 backdrop-blur-sm border border-[#C778DD]/30 text-white "
                        style={{ fontFamily: "'Fira Code', monospace" }}
                      >
                        Rate: {blog.rate.hour[1].currency}{" "}
                        {blog.rate.hour[1].range[0]} -{" "}
                        {blog.rate.hour[1].range[1]} / hour
                      </p>
                      <p
                        className="text-xs text-center w-full mt-1 text-[#ABB2BF] "
                        style={{ fontFamily: "'Fira Code', monospace" }}
                      >
                        * Pricing varies with scope
                      </p>
                    </div>

                    <div>
                      <p
                        className="py-2 text-center text-white "
                        style={{ fontFamily: "'Fira Code', monospace" }}
                      >
                        <span className="text-[#C778DD]">#</span>
                        {capitalizeFirstLetter(blog.id)} Types
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        {blog.types.map((type, index) => (
                          <div
                            className="text-sm font-medium px-3 py-1 whitespace-nowrap  bg-[#C778DD]/20 text-[#C778DD] border border-[#C778DD]/50"
                            key={`type-${blog.id}-${index}`}
                            style={{ fontFamily: "'Fira Code', monospace" }}
                          >
                            {type.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ),
          }))}
          className="p-5"
        />
      </section> */}
    </>
  );
}
