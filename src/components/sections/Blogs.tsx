"use client";
import { useEffect, useState } from "react";
import { fetchBlogData, getSectionData } from "@/lib/api";
import VerticalTabs from "../ui/dev/VerticalTabs";
import Card from "../ui/dev/Card";
import { Blog, BlogMetaData, BlogTypeItem } from "@/types/blogs";

export default function BlogsSection() {
  const [blogsOptions, setBlogsOptions] = useState<
    Partial<Record<string, Blog[]>>
  >({
    "clean-code": [
      {
        url: "",
        souurce: "",
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [blogTypesOptions, setBlogTypesOptions] = useState<BlogTypeItem[]>([
    {
      type: "",
      label: "",
    },
  ]);

  const [blogMetaData, setBlogMetaData] = useState<BlogMetaData[]>([
    {
      url: "",
      title: "",
      description: "",
      previewImage: "",
      publishedDate: "",
    },
  ]);
  async function fetchBlogMetaData(urls) {
    let data = await fetchBlogData(urls);
    if (data.length) setBlogMetaData(data);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSectionData("blogs");

        setBlogsOptions(data.blogs);
        fetchBlogMetaData(data.blogs["clean-code"]);

        setBlogTypesOptions(data.types);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(blogsOptions);
    if ((blogsOptions["clean-code"] || []).length > 1) fetchBlogMetaData();
  }, [blogsOptions["clean-code"]?.length]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* Desktop/Tablet Layout: Timeline + Project Details (md and above) */}

      <section className="hidden md:flex gap-6">
        <VerticalTabs
          tabs={blogTypesOptions.map((type, index) => {
            return {
              id: "blog" + index,
              name: type.label,
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {blogMetaData.map((blog, index) => {
                    return (
                      <Card
                        title={blog.title}
                        clickable
                        onClick={() => {
                          window.open(blog.url, "_blank");
                        }}
                        key={`${type.type}-${index}`}
                        coverImage={blog.previewImage}
                        coverImageHeight={300}
                        description={blog.description}
                        className="w-300 h-[60vh]"
                        content={<div></div>}
                      ></Card>
                    );
                  })}
                </div>
              ),
            };
          })}
        />
      </section>
    </>
  );
}
