import React from "react";
import IconComponent from "../ui/Icon";
import IconMap from "@/types/iconMap";

// Types
interface Skill {
  name: string;
  level: string;
  years: number;
  icon?: string;
  color?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsData {
  categories: Record<string, SkillCategory>;
}

// Logic Hook
const useSkillsLogic = () => {
  const getLevelStars = (level: string | number) => {
    const numLevel = typeof level === "string" ? parseInt(level) : level;
    return "★".repeat(numLevel) + "☆".repeat(5 - numLevel);
  };

  const getExperienceLabel = (years: number) => {
    if (years >= 5) return "Master";
    if (years >= 4) return "Expert";
    if (years >= 3) return "Advanced";
    if (years >= 2) return "Proficient";
    return "Learning";
  };

  const getLevelColor = (level: string | number) => {
    const numLevel = typeof level === "string" ? parseInt(level) : level;
    const colors = {
      5: "bg-yellow-500 border-yellow-400 text-yellow-100", // Gold - Master
      4: "bg-green-500 border-green-400 text-green-100", // Green - Expert
      3: "bg-blue-500 border-blue-400 text-blue-100", // Blue - Intermediate
      2: "bg-purple-500 border-purple-400 text-purple-100", // Purple - Beginner
      1: "bg-gray-500 border-gray-400 text-gray-100", // Gray - Novice
    };
    return colors[numLevel as keyof typeof colors] || colors[1];
  };

  const getProgressBarColor = (level: string | number) => {
    const numLevel = typeof level === "string" ? parseInt(level) : level;
    const colors = {
      5: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      4: "bg-gradient-to-r from-green-400 to-green-600",
      3: "bg-gradient-to-r from-blue-400 to-blue-600",
      2: "bg-gradient-to-r from-purple-400 to-purple-600",
      1: "bg-gradient-to-r from-gray-400 to-gray-600",
    };
    return colors[numLevel as keyof typeof colors] || colors[1];
  };

  const getYearsColor = (years: number) => {
    if (years >= 5) return "text-yellow-300"; // Gold
    if (years >= 4) return "text-green-300"; // Green
    if (years >= 3) return "text-blue-300"; // Blue
    if (years >= 2) return "text-purple-300"; // Purple
    return "text-gray-300"; // Gray
  };

  const getCategoryCharacter = (categoryKey: string) => {
    const characters = {
      frontend: { character: "sans", color: "text-cyan-300", prefix: "* " },
      backend: { character: "papyrus", color: "text-orange-300", prefix: "! " },
      cloud: { character: "undyne", color: "text-green-300", prefix: "⚔ " },
      mobile: { character: "alphys", color: "text-yellow-300", prefix: "... " },
      tools: { character: "toriel", color: "text-purple-300", prefix: "• " },
    };
    return (
      characters[categoryKey as keyof typeof characters] || {
        character: "frisk",
        color: "text-red-300",
        prefix: "* ",
      }
    );
  };

  return {
    getLevelStars,
    getExperienceLabel,
    getLevelColor,
    getProgressBarColor,
    getYearsColor,
    getCategoryCharacter,
  };
};

const SkillLevelBadge = ({ level }: { level: string | number }) => {
  const numLevel = typeof level === "string" ? parseInt(level) : level;
  const getLevelColor = (level: number) => {
    const colors = {
      5: "bg-yellow-500 border-yellow-400 text-yellow-100",
      4: "bg-green-500 border-green-400 text-green-100",
      3: "bg-blue-500 border-blue-400 text-blue-100",
      2: "bg-purple-500 border-purple-400 text-purple-100",
      1: "bg-gray-500 border-gray-400 text-gray-100",
    };
    return colors[level as keyof typeof colors] || colors[1];
  };

  return (
    <div
      className={`px-2 py-1 rounded border-2 font-mono text-xs font-bold ${getLevelColor(numLevel)}`}
    >
      LV {numLevel}
    </div>
  );
};

const YearsBadge = ({ years }: { years: number }) => {
  const getYearsColor = (years: number) => {
    if (years >= 5) return "text-yellow-300 border-yellow-400/50";
    if (years >= 4) return "text-green-300 border-green-400/50";
    if (years >= 3) return "text-blue-300 border-blue-400/50";
    if (years >= 2) return "text-purple-300 border-purple-400/50";
    return "text-gray-300 border-gray-400/50";
  };

  return (
    <div
      className={`px-2 py-1 border rounded font-mono text-xs ${getYearsColor(years)} bg-black/20`}
    >
      {years}y
    </div>
  );
};

// Main Component
const SkillsTable = ({ skillsData, iconMap }: { skillsData: SkillsData, iconMap: IconMap }) => {
  const { getLevelStars, getCategoryCharacter } = useSkillsLogic();

  return (
    <div className="relative z-10 p-5 text-gray-400">
      {/* Header */}
      <p className="mb-6 text-center text-gray-400 text-sm">
        Skills acquired through determination and countless hours of coding
      </p>

      {/* Skills by Category */}
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row space-y-2 align-start">
        {Object.entries(skillsData.categories).map(
          ([categoryKey, category]) => {
            const categoryStyle = getCategoryCharacter(categoryKey);

            return (
              <div key={categoryKey} className="mr-2">
                {/* Category Header */}
                <h3 className={`text-lg font-bold ${categoryStyle.color}`}>
                  {categoryStyle.prefix}
                  {category.name}
                </h3>

                {/* Skills Grid */}
                <div className="space-y-3 max-h-[60vh] overflow-y-auto custom-scroll">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 border border-gray-600 rounded-lg p-3"
                    >
                      <div className="grid grid-cols-12 gap-4 items-center">
                        {/* Skill Name */}
                        <div className="col-span-4">
                          <IconComponent
                            name={skill.name}
                            iconMap={iconMap.skills}
                            iconClass="w-8 h-8"
                            divClass="flex flex-row items-center gap-2"
                          />
                        </div>

                        {/* Level Stars */}
                        <div className="col-span-4 text-center">
                          <span className="text-yellow-400">
                            {getLevelStars(skill.level)}
                          </span>
                        </div>

                        {/* Level Badge */}
                        <div className="col-span-3 flex justify-center">
                          <SkillLevelBadge level={skill.level} />
                        </div>

                        {/* Years Badge */}
                        <div className="col-span-1 flex justify-center">
                          <YearsBadge years={skill.years} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default SkillsTable;
