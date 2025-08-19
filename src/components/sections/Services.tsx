"use client";
import { useEffect, useState } from "react";
import { getSectionData } from "@/lib/api";
import VerticalTabs from "../ui/undertale/VerticalTabs";
import Card from "../ui/undertale/Card";
import { UndertaleButton } from "../ui/undertale/Form";
import { capitalizeFirstLetter } from "@/lib/utils";
import MobileCarousel from "../ui/undertale/Scroll";
import { Service } from "@/types/services";
import IconComponent from "../ui/Icon";
import { IconConfig } from "@/types/iconMap";

interface ServiceSectionProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setWorkType: React.Dispatch<React.SetStateAction<string>>;
  iconMap: IconConfig[]
}


export default function ServicesSection({ setActiveTab, setWorkType, iconMap }: ServiceSectionProps) {
  const [servicesOptions, setServicesOptions] = useState<Service[]>([
    { id: "", name: "",iconId:"", description: "", rate:{
      hour: [{timezone:'', default: false, range: ["",""], currency: ''}]
    }, features: [{text:'', iconId: ''}], types: [{text:'', iconId: ''}], available: true },
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

  return (<>
     {/* Desktop/Tablet Layout: Timeline + Project Details (md and above) */}
     <section className="hidden md:flex p-4 gap-6">
    <VerticalTabs
      tabs={servicesOptions.map((service) => {
        return {
          ...service,
          content: (
            <div className="flex flex-col md:flex-row lg:flex-row">
              <Card
                title={service.name}
                description={service.description}
                className="w-1/2"
              >
                <ul>
                  {service.features.map((feature, index) => (
                    <li
                    className="flex justify-items:center p-2 rounded"
                    key={service.id + index}
                  >
                    <IconComponent
                    id = {feature.iconId}
                    iconMap={iconMap}
                    iconClass="w-6 h-6 mr-2"
                    /> 
                    
                    <div className="text-yellow-300">{feature.text}</div>
                  </li>
                  ))}
                </ul>
              </Card>
              <div className="relative ml-10 h-fit">
              
                <div className="relative p-5">
                <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

                  <p className="flex flex-col items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 ">
                    Rate: {service.rate.hour[1].currency}  {service.rate.hour[1].range[0]} - {service.rate.hour[1].range[1]} / hour
                  </p>
                  <p className="text-xs text-center w-full mt-1">* Pricing varies with scope</p>
                </div>
                <div className="relative p-5 mt-2 flex flex-col">
                <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

                  <p className="text-center mb-5">Fill out the form to dive in further</p>
                  <UndertaleButton
                    onClick={() => {
                      setActiveTab("contact");
                      setWorkType(service.id);
                    }}
                    variant="subtle-primary" // New subtle variant
                    size="small"
                  >
                    Let&apos;s start builing
                  </UndertaleButton>
                  </div>
                <div>
                  <p className="py-2 text-center">
                    {capitalizeFirstLetter(service.id)} Types
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {service.types.map((type, index) => (
                      <div
                        className="flex items-center
                    text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap font-mono 
                    bg-blue-900/80 text-blue-200 border border-blue-500 shadow-blue-500/30"
                        key={`type-${service.id}-${index}`}
                      >
                        <IconComponent id={type.iconId} iconMap={iconMap}
                        iconClass="w-4 h-4 mr-2"
                        />
                        {type.text}
                      </div>
                    ))}
                  </div>
                
                </div>
              </div>
            </div>
          ),
        };
      })}
    />
    </section>

          {/* Mobile Layout: Carousel (sm and below) */}
          <section className="md:hidden">
            <MobileCarousel
            items={servicesOptions.map(service=>({
              id: service.id, 
              content:
                  <Card
                    title={service.name}
                    description={service.description}
                    noBackground={true}
                  >
                    <div className="flex flex-col md:flex-row lg:flex-row">

                    <ul>
                      {service.features.map((feature, index) => (
                        <li
                          className="flex justify-items:center p-2 rounded"
                          key={service.id + index}
                        >
                          <IconComponent
                          id = {feature.iconId}
                          iconMap={iconMap}
                          iconClass="w-6 h-6 mr-2"
                          /> 
                          
                          <div className="text-yellow-300">{feature.text}</div>
                        </li>
                      ))}
                    </ul>
                    <div className="relative mt-5 h-fit">
                  
                  <div className="relative p-5">
                  <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>
  
                    <p className="flex flex-col items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 ">
                      Rate: {service.rate.hour[1].currency}  {service.rate.hour[1].range[0]} - {service.rate.hour[1].range[1]} / hour
                    </p>
                    <p className="text-xs text-center w-full mt-1">* Pricing varies with scope</p>
                  </div>
                  <div className="relative p-5 mt-2 flex flex-col">
                  <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>
  
                    <p className="text-center mb-5">Fill out the form to dive in further</p>
                    <UndertaleButton
                      onClick={() => {
                        setActiveTab("contact");
                        setWorkType(service.id);
                      }}
                      variant="subtle-primary" // New subtle variant
                      size="small"
                    >
                      Let&apos;s start builing
                    </UndertaleButton>
                    </div>
                  <div>
                    <p className="py-2 text-center">
                      {capitalizeFirstLetter(service.id)} Types
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {service.types.map((type, index) => (
                        <div
                          className="
                      text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap font-mono 
                      bg-blue-900/80 text-blue-200 border border-blue-500 shadow-blue-500/30"
                          key={`type-${service.id}-${index}`}
                        >
                          {type.text}
                        </div>
                      ))}
                    </div>
                  
                  </div>
                </div>
                </div>

                  </Card>
                 
              
            }))}
            className="p-5"
            />
            </section>
    </>
  );
}
