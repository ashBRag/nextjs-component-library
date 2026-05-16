"use client";
import { useEffect, useState } from "react";
import { getSectionData } from "@/lib/api";
import VerticalTabs from "@/components/navList/NavList";
import Card from "../components/card/Card";
import { BlogData } from "@/types/blogs";

export default function BlogsSection() {
  const [loading, setLoading] = useState(true);
  const [blogOptions, setBlogOptions] = useState<BlogData[]>([
    {
      type: "",
      label: "",
      blogs: [],
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSectionData("blogs");
        setBlogOptions(data);
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
      <section className="hidden md:flex gap-6">
        <VerticalTabs
          horizontal
          tabs={blogOptions.map(({ type, label, blogs }, index) => {
            return {
              id: "blog" + index,
              name: label,
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {blogs?.map((blog, index) => {
                    return (
                      <Card
                        title={
                          <div>
                            <div className="font-bold">{blog.title}</div>
                            <div className="text-sm text-gray-500 mt-10 flex items-center gap-2">
                              {blog.tags?.map((tag) => (
                                <div key={tag}>#{tag}</div>
                              ))}
                            </div>
                            <div className="text-sm text-gray-500 mt-2">
                              {blog.publishedAt}
                            </div>
                          </div>
                        }
                        clickable
                        onClick={() => {
                          window.open(blog.url, "_blank");
                        }}
                        size="compact"
                        key={`${type}-${index}`}
                        coverImage={blog.previewImage}
                      ></Card>
                    );
                  })}
                </div>
              ),
            };
          })}
          contentClassName="w-full p-4"
        />
      </section>
    </>
  );
}
