"use client";
import { useEffect, useState } from "react";
import { getSectionData } from "@/lib/api";
import VerticalTabs from "../ui/dev/VerticalTabs";
import Card from "../ui/dev/Card";
import { PortfolioButton } from "../ui/dev/Form";
import { capitalizeFirstLetter } from "@/lib/utils";
import MobileCarousel from "../ui/undertale/Scroll";
import { Service } from "@/types/services";
import IconComponent from "../ui/Icon";
import { IconConfig } from "@/types/iconMap";
import { FloatingScrollButton } from "../ui/dev/ScrollButton";

interface ServiceSectionProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setWorkType: React.Dispatch<React.SetStateAction<string>>;
  iconMap: IconConfig[];
  id: string;
}

export default function ServicesSection({
  setActiveTab,
  setWorkType,
  iconMap,
  id,
}: ServiceSectionProps) {
  const [servicesOptions, setServicesOptions] = useState<Service[]>([
    {
      id: "",
      name: "",
      iconId: "",
      description: "",
      rate: {
        hour: [{ timezone: "", default: false, range: ["", ""], currency: "" }],
      },
      features: [{ text: "", iconId: "" }],
      types: [{ text: "", iconId: "" }],
      available: true,
    },
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
    <>
      {/* Desktop/Tablet Layout: Timeline + Project Details (md and above) */}
      <section className="hidden md:flex gap-6" id={id}>
        <VerticalTabs
          tabs={servicesOptions.map((service) => {
            return {
              ...service,
              content: (
                <div className="flex flex-col md:flex-row lg:flex-row">
                  <Card
                    title={service.name}
                    description={service.description}
                    className="w-1/2 h-[70vh]"
                  >
                    <ul>
                      {service.features.map((feature, index) => (
                        <li
                          className="flex justify-items:center py-2 rounded"
                          key={service.id + index}
                        >
                          <IconComponent
                            id={feature.iconId}
                            iconMap={iconMap}
                            iconClass="w-6 h-6 mr-2"
                            divClass="flex"
                          />

                          <div className="text-[#C778DD]">{feature.text}</div>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <div className="relative ml-10 h-fit w-1/2">
                    <div className="relative p-5  border border-[#ABB2BF]/30">
                      <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-[#ABB2BF] opacity-30"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-[#ABB2BF] opacity-30"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-[#ABB2BF] opacity-30"></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-[#ABB2BF] opacity-30"></div>

                      <p className="flex flex-col items-center gap-2 p-3 bg-[#C778DD]/10 backdrop-blur-sm border border-[#C778DD]/30 text-white ">
                        Rate: {service.rate.hour[1].currency}{" "}
                        {service.rate.hour[1].range[0]} -{" "}
                        {service.rate.hour[1].range[1]} / hour
                      </p>
                      <p className="text-xs text-center w-full mt-1 text-[#ABB2BF] ">
                        * Pricing varies with scope
                      </p>
                    </div>

                    <div>
                      <p className="py-2 text-center text-white ">
                        <span className="text-[#C778DD]">#</span>
                        {capitalizeFirstLetter(service.id)} Types
                      </p>

                      <div className="grid grid-cols-1 gap-4">
                        {service.types.map((type, index) => (
                          <div
                            className="flex items-center text-sm font-medium px-3 py-1 whitespace-nowrap  bg-[#C778DD]/20 text-[#C778DD] border border-[#C778DD]/50"
                            key={`type-${service.id}-${index}`}
                          >
                            <IconComponent
                              id={type.iconId}
                              iconMap={iconMap}
                              iconClass="w-4 h-4 mr-2"
                              divClass="flex"
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
          items={servicesOptions.map((service) => ({
            id: service.id,
            content: (
              <Card title={service.name} description={service.description}>
                <div className="flex flex-col md:flex-row lg:flex-row">
                  <ul>
                    {service.features.map((feature, index) => (
                      <li
                        className="flex items-center py-2 rounded"
                        key={service.id + index}
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

                      <p className="flex flex-col items-center gap-2 p-3 bg-[#C778DD]/10 backdrop-blur-sm border border-[#C778DD]/30 text-white ">
                        Rate: {service.rate.hour[1].currency}{" "}
                        {service.rate.hour[1].range[0]} -{" "}
                        {service.rate.hour[1].range[1]} / hour
                      </p>
                      <p className="text-xs text-center w-full mt-1 text-[#ABB2BF] ">
                        * Pricing varies with scope
                      </p>
                    </div>

                    <div>
                      <p className="py-2 text-center text-white ">
                        <span className="text-[#C778DD]">#</span>
                        {capitalizeFirstLetter(service.id)} Types
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        {service.types.map((type, index) => (
                          <div
                            className="text-sm font-medium px-3 py-1 whitespace-nowrap  bg-[#C778DD]/20 text-[#C778DD] border border-[#C778DD]/50"
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
            ),
          }))}
          className="p-5"
        />
        {/* <FloatingScrollButton id="contact" /> */}
      </section>
    </>
  );
}
