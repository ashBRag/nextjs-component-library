import React from "react";
import IconComponent from "../ui/Icon";

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
      5: "bg-yellow-500/20 border-yellow-400 text-yellow-300", // Gold - Master
      4: "bg-green-500/20 border-green-400 text-green-300", // Green - Expert
      3: "bg-blue-500/20 border-blue-400 text-blue-300", // Blue - Intermediate
      2: "bg-purple-500/20 border-purple-400 text-purple-300", // Purple - Beginner
      1: "bg-[#ABB2BF]/20 border-[#ABB2BF] text-[#ABB2BF]", // Gray - Novice
    };
    return colors[numLevel as keyof typeof colors] || colors[1];
  };

  const getStarsColor = (level: string | number) => {
    const numLevel = typeof level === "string" ? parseInt(level) : level;
    const colors = {
      5: "text-yellow-400",
      4: "text-green-400",
      3: "text-blue-400",
      2: "text-purple-400",
      1: "text-[#ABB2BF]",
    };
    return colors[numLevel as keyof typeof colors] || colors[1];
  };

  const getYearsColor = (years: number) => {
    if (years >= 5) return "text-yellow-300 border-yellow-400/50";
    if (years >= 4) return "text-green-300 border-green-400/50";
    if (years >= 3) return "text-blue-300 border-blue-400/50";
    if (years >= 2) return "text-purple-300 border-purple-400/50";
    return "text-[#ABB2BF] border-[#ABB2BF]/50";
  };

  return {
    getLevelStars,
    getExperienceLabel,
    getLevelColor,
    getStarsColor,
    getYearsColor,
  };
};

const SkillLevelBadge = ({ level }: { level: string | number }) => {
  const { getLevelColor } = useSkillsLogic();
  const numLevel = typeof level === "string" ? parseInt(level) : level;

  return (
    <div
      className={`px-2 py-1 border  text-xs font-medium ${getLevelColor(
        level
      )}`}
    >
      LV {numLevel}
    </div>
  );
};

const YearsBadge = ({ years }: { years: number }) => {
  const { getYearsColor } = useSkillsLogic();

  return (
    <div className={`px-2 py-1 border  text-xs /50 ${getYearsColor(years)}`}>
      {years}y
    </div>
  );
};

// Main Component
const PortfolioSkillsTable = ({ skillsData }) => {
  const { getLevelStars, getStarsColor } = useSkillsLogic();

  return (
    <div className="relative z-10">
      {/* Header */}

      <p className="mb-6 text-[#ABB2BF] text-sm  text-center">
        Skills acquired through determination and countless hours of coding
      </p>

      {/* Skills by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skillsData.categories).map(
          ([categoryKey, category]) => (
            <div
              key={categoryKey}
              className=" border border-[#ABB2BF]/30 p-4 relative"
            >
              {/* Corner brackets */}
              <div className="absolute top-1 left-1 w-3 h-3">
                <div className="w-full h-0.5 bg-[#ABB2BF]/30"></div>
                <div className="w-0.5 h-full bg-[#ABB2BF]/30"></div>
              </div>
              <div className="absolute top-1 right-1 w-3 h-3">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-[#ABB2BF]/30"></div>
                <div className="absolute top-0 right-0 w-0.5 h-full bg-[#ABB2BF]/30"></div>
              </div>
              <div className="absolute bottom-1 left-1 w-3 h-3">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ABB2BF]/30"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[#ABB2BF]/30"></div>
              </div>
              <div className="absolute bottom-1 right-1 w-3 h-3">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#ABB2BF]/30"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-[#ABB2BF]/30"></div>
              </div>

              {/* Category Header */}
              <h4 className="text-white font-medium mb-4  relative z-10">
                <span className="text-[#C778DD]">{category.name}</span>
              </h4>

              {/* Skills List */}
              <div className="space-y-3 relative z-10">
                {category.skills.map((skill, index) => (
                  <div key={index} className="p-2">
                    <div className="grid grid-cols-12 gap-2 items-center">
                      {/* Skill Name & Icon */}
                      <div className="col-span-5 flex items-center gap-2">
                        <IconComponent
                          section="skills"
                          name={skill.name}
                          iconClass="w-5 h-5"
                          divClass="flex"
                          show={false}
                        />
                        <span className="text-[#ABB2BF] text-sm  truncate">
                          {skill.name}
                        </span>
                      </div>

                      {/* Level Stars */}
                      <div className="col-span-4 text-center">
                        <span
                          className={`text-xs  ${getStarsColor(skill.level)}`}
                        >
                          {getLevelStars(skill.level)}
                        </span>
                      </div>

                      {/* Level Badge */}
                      <div className="col-span-2 flex justify-center">
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
          )
        )}
      </div>
    </div>
  );
};

export default PortfolioSkillsTable;
