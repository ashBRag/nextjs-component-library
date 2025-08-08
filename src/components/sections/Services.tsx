"use client";
import { useEffect, useState } from "react";
import { getSectionData } from "@/lib/api";
import VerticalTabs from "../ui/undertale/VerticalTabs";
import Card from "../ui/undertale/Card";

export default function ServicesSection() {
  const [servicesOptions, setServicesOptions] = useState([
    { id: "", name: "", description: "", rate: "" },
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
            <Card title={service.description} description={service.rate} />
          ),
        };
      })}
    />
  );
}
