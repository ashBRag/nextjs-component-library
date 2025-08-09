"use client";
import { useEffect, useState } from "react";
import { getSectionData } from "@/lib/api";
import VerticalTabs from "../ui/undertale/VerticalTabs";
import Card from "../ui/undertale/Card";
import { features } from "process";
import { UndertaleButton } from "../ui/undertale/Form";

export default function ServicesSection({setActiveTab, setWorkType}) {
  const [servicesOptions, setServicesOptions] = useState([
    { id: "", name: "", description: "", rate: "", features: [], types: [] },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSectionData("services");

        setServicesOptions(data.services);
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
    <VerticalTabs
      tabs={servicesOptions.map((service) => {
        return {
          ...service,
          content: (
            <div className="flex">
              <Card
                title={service.name}
                description={service.description}
                className="w-1/2"
              >
                <ul>
                  {service.features.map((feature, index) => (
                    <li
                      className=" p-2 rounded text-yellow-300"
                      key={service.id + index}
                    >
                      * {feature}
                    </li>
                  ))}
                </ul>
              </Card>
              <div className="relative ml-10 p-5 h-fit">
                <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

                <div>
                  <p className="flex flex-col items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 ">Rate {service.rate}</p>
                </div>
                <div>
                  <p>{service.id} Types</p>
                  <div className="grid grid-cols-2 gap-4">
                  {service.types.map((type, index) => (
                    <div 
                    className="
                    text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap font-mono 
                    bg-blue-900/80 text-blue-200 border border-blue-500 shadow-blue-500/30"
                    key={`type-${service.id}-${index}`}>{type}</div>
                  ))}
                  </div>
                  <p>Fill out the form to dive in further</p>
                  <UndertaleButton
                  onClick={()=>{
                    setActiveTab('contact')
                    setWorkType(service.id)
                  }}
                  variant="subtle-primary" // New subtle variant
              size="small"
                  >
                    Let&apos;s start builing
                  </UndertaleButton>
                </div>
              </div>
            </div>
          ),
        };
      })}
    />
  );
}
