import { AppWindow, Code, Bot, DatabaseIcon, Hammer, User } from "lucide-react";
import square from "../assets/imgs/square.png";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C#", "JavaScript", "SQL", "C++"],
    icon: <Code />,
    color: "#FF188C",
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "Bootstrap", "ReactJS", "ASP.NET Core", "REST APIs"],
    icon: <AppWindow />,
    color: "#00FFF6",
  },
  {
    category: "Databases",
    items: [
      "Oracle APEX",
      "Firebase (NoSQL)",
      "MySQL",
      "SQL Server Management",
      "MongoDB",
      "PL/SQL",
    ],
    icon: <DatabaseIcon />,
    color: "#A1FF00",
  },
  {
    category: "AI & Computer Science",
    items: [
      "Machine Learning",
      "Artificial Intelligence",
      "Cybersecurity",
      "Algorithms",
      "Data Structures",
      "Object-Oriented Programming",
    ],
    icon: <Bot />,
    color: "#9BABFF",
  },
  {
    category: "Tools & Frameworks",
    items: ["Git", "Figma", "Jira"],
    icon: <Hammer />,
    color: "#D06AFF",
  },

  {
    category: "Soft Skills",
    items: [
      "Team Collaboration",
      "Critical Thinking",
      "Leadership",
      "Problem Solving",
      "Project Management",
    ],
    icon: <User />,
    color: "#FFA500",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen">
      <div>
        <div className="container py-24 px-4 relative">
          <img
            src={square}
            loading="lazy"
            className="absolute bottom-0 right-0 h-10 md:h-14 lg:h-18"
          />

          <div className="mb-5 opacity-0 animate-fade-in">
            <h1 className="homepage-title-font">
              My <span className="tertiary-color">Skills</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const full = skill.color;
              const bg10 = `${skill.color}20`;

              return (
                <div
                  key={index}
                  className="bg-tertiary-light p-6 py-12 pt-4 rounded-xl flex flex-col gap-3 card-hover"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="rounded-full bg-tertiary primary-color p-2"
                      style={{
                        backgroundColor: full,
                      }}
                    >
                      {skill.icon}
                    </div>
                    <h3 className="tertiary-font text-xl font-medium">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="font-semibold text-sm p-3 py-2 rounded-full"
                        style={{
                          backgroundColor: bg10,
                          color: full,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
